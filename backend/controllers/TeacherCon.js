const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Teacher = require('../Schema/Teacher.js');
const Subject = require('../Schema/subjectSchema.js');

const teacherRegister = async (req, res) => {
    const { name, email, password, role, college, teachSubject, teachSclass } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(teachSubject)) {
            console.error('Invalid subject ID:', teachSubject);
            return res.status(400).send({ message: "Invalid subject ID" });
        }

        if (!mongoose.Types.ObjectId.isValid(teachSclass)) {
            console.error('Invalid class ID:', teachSclass);
            return res.status(400).send({ message: "Invalid class ID" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        const teacher = new Teacher({ name, email, password: hashedPass, role, college, teachSubject, teachSclass });

        const existingTeacherByEmail = await Teacher.findOne({ email });

        if (existingTeacherByEmail) {
            res.status(400).send({ message: 'Email already exists' });
        } else {
            let result = await teacher.save();
            await Subject.findByIdAndUpdate(teachSubject, { teacher: teacher._id });
            result.password = undefined;
            res.send(result);
        }
    } catch (err) {
        console.error('Error during teacher registration:', err);
        res.status(500).send({ message: 'Server error', error: err.stack });
    }
};

const teacherLogIn = async (req, res) => {
    try {
        let teacher = await Teacher.findOne({ email: req.body.email });
        if (teacher) {
            const validated = await bcrypt.compare(req.body.password, teacher.password);
            if (validated) {
                teacher.password = undefined;
                res.send(teacher);
            } else {
                res.status(400).send({ message: "Invalid password" });
            }
        } else {
            res.status(404).send({ message: "Teacher not found" });
        }
    } catch (err) {
        console.error('Error during teacher login:', err);
        res.status(500).send({ message: 'Server error', error: err.stack });
    }
};

const getTeachers = async (req, res) => {
    try {
        const { college } = req.query;
        
        // Validate if college is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(college)) {
            return res.status(400).send({ error: 'Invalid college ID' });
        }

        let teachers = await Teacher.find({ college })
            .populate("teachSubject", "subName")
            .populate("teachSclass", "sclassName");
        if (teachers.length > 0) {
            let modifiedTeachers = teachers.map((teacher) => {
                return { ...teacher._doc, password: undefined };
            });
            res.send(modifiedTeachers);
        } else {
            res.status(404).send({ message: "No teachers found" });
        }
    } catch (err) {
        console.error('Error fetching teachers:', err);
        res.status(500).send({ message: 'Server error', error: err.stack });
    }
};

const getTeacherDetail = async (req, res) => {
    try {
        const teacherId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(teacherId)) {
            console.error('Invalid teacher ID:', teacherId);
            return res.status(400).send({ message: "Invalid teacher ID" });
        }

        let teacher = await Teacher.findById(teacherId)
            .populate("college", "collegeName")
            .populate("teachSclass", "sclassName");
        if (teacher) {
            teacher.password = undefined;
            res.send(teacher);
        } else {
            res.status(404).send({ message: "No teacher found" });
        }
    } catch (err) {
        console.error('Error fetching teacher details:', err);
        res.status(500).send({ message: 'Server error', error: err.stack });
    }
};

const updateTeacherSubject = async (req, res) => {
    const { teacherId, teachSubject } = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(teacherId)) {
            console.error('Invalid teacher ID:', teacherId);
            return res.status(400).send({ message: "Invalid teacher ID" });
        }

        if (!mongoose.Types.ObjectId.isValid(teachSubject)) {
            console.error('Invalid subject ID:', teachSubject);
            return res.status(400).send({ message: "Invalid subject ID" });
        }

        const updatedTeacher = await Teacher.findByIdAndUpdate(
            teacherId,
            { teachSubject },
            { new: true }
        );

        await Subject.findByIdAndUpdate(teachSubject, { teacher: updatedTeacher._id });

        res.send(updatedTeacher);
    } catch (error) {
        console.error('Error updating teacher subject:', error);
        res.status(500).send({ message: 'Server error', error: error.stack });
    }
};

const deleteTeacher = async (req, res) => {
    try {
        const teacherId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(teacherId)) {
            console.error('Invalid teacher ID:', teacherId);
            return res.status(400).send({ message: "Invalid teacher ID" });
        }

        const deletedTeacher = await Teacher.findByIdAndDelete(teacherId);

        await Subject.updateOne(
            { teacher: deletedTeacher._id, teacher: { $exists: true } },
            { $unset: { teacher: 1 } }
        );

        res.send(deletedTeacher);
    } catch (error) {
        console.error('Error deleting teacher:', error);
        res.status(500).send({ message: 'Server error', error: error.stack });
    }
};

const deleteTeachers = async (req, res) => {
    try {
        const collegeId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(collegeId)) {
            console.error('Invalid college ID:', collegeId);
            return res.status(400).send({ message: "Invalid college ID" });
        }

        const deletedTeachers = await Teacher.find({ college: collegeId });

        if (deletedTeachers.length === 0) {
            res.status(404).send({ message: "No teachers found to delete" });
            return;
        }

        await Teacher.deleteMany({ college: collegeId });

        await Subject.updateMany(
            { teacher: { $in: deletedTeachers.map(teacher => teacher._id) }, teacher: { $exists: true } },
            { $unset: { teacher: 1 } }
        );

        res.send({ message: `${deletedTeachers.length} teachers deleted` });
    } catch (error) {
        console.error('Error deleting teachers:', error);
        res.status(500).send({ message: 'Server error', error: error.stack });
    }
};

module.exports = {
    teacherRegister,
    teacherLogIn,
    getTeachers,
    getTeacherDetail,
    updateTeacherSubject,
    deleteTeacher,
    deleteTeachers,
};