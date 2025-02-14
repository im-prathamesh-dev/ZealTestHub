const Sclass = require('../Schema/sclassSchema.js');
const { findOne, find, findById, findByIdAndDelete, deleteMany } = require('../Schema/sclassSchema.js');
const { find: _find, deleteMany: _deleteMany } = require('../Schema/Student.js');
// const { deleteMany: __deleteMany } = require('../models/subjectSchema.js');
const { deleteMany: ___deleteMany } = require('../Schema/Teacher.js');

const sclassCreate = async (req, res) => {
    try {
        const sclass = new Sclass({
            sclassName: req.body.sclassName,
            college: req.body.adminID
        });

        const existingSclassByName = await findOne({
            sclassName: req.body.sclassName,
            college: req.body.adminID
        });

        if (existingSclassByName) {
            res.send({ message: 'Sorry this class name already exists' });
        }
        else {
            const result = await sclass.save();
            res.send(result);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const sclassList = async (req, res) => {
    try {
        let sclasses = await find({ college: req.params.id })
        if (sclasses.length > 0) {
            res.send(sclasses)
        } else {
            res.send({ message: "No sclasses found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSclassDetail = async (req, res) => {
    try {
        let sclass = await findById(req.params.id);
        if (sclass) {
            sclass = await sclass.populate("college", "collegeName")
            res.send(sclass);
        }
        else {
            res.send({ message: "No class found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const getSclassStudents = async (req, res) => {
    try {
        let students = await _find({ sclassName: req.params.id })
        if (students.length > 0) {
            let modifiedStudents = students.map((student) => {
                return { ...student._doc, password: undefined };
            });
            res.send(modifiedStudents);
        } else {
            res.send({ message: "No students found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteSclass = async (req, res) => {
    try {
        const deletedClass = await findByIdAndDelete(req.params.id);
        if (!deletedClass) {
            return res.send({ message: "Class not found" });
        }
        const deletedStudents = await _deleteMany({ sclassName: req.params.id });
        const deletedSubjects = await __deleteMany({ sclassName: req.params.id });
        const deletedTeachers = await ___deleteMany({ teachSclass: req.params.id });
        res.send(deletedClass);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteSclasses = async (req, res) => {
    try {
        const deletedClasses = await deleteMany({ college: req.params.id });
        if (deletedClasses.deletedCount === 0) {
            return res.send({ message: "No classes found to delete" });
        }
        const deletedStudents = await _deleteMany({ college: req.params.id });
        const deletedSubjects = await __deleteMany({ college: req.params.id });
        const deletedTeachers = await ___deleteMany({ college: req.params.id });
        res.send(deletedClasses);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { sclassCreate, sclassList, deleteSclass, deleteSclasses, getSclassDetail, getSclassStudents };