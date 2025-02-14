const bcrypt = require('bcrypt');
const Admin = require('../Schema/admin.js'); // Remove .default
const Sclass = require('../Schema/sclassSchema.js');
const Student = require('../Schema/Student.js').default;
const Teacher = require('../Schema/Teacher.js').default;
// const Subject = require('../models/subjectSchema.js');
// const Notice = require('../models/noticeSchema.js');
// const Complain = require('../models/complainSchema.js');


 const adminRegister = async (req, res) => {
     try {
         const salt = await bcrypt.genSalt(10);
         const hashedPass = await bcrypt.hash(req.body.password, salt);

         const admin = new Admin({
             ...req.body,
             password: hashedPass
         });

         const existingAdminByEmail = await Admin.findOne({ email: req.body.email });

         if (existingAdminByEmail) {
             res.send({ message: 'Email already exists' });
         }
         else {
             let result = await admin.save();
             result.password = undefined;
             res.send(result);
         }
     } catch (err) {
         res.status(500).json(err);
     }
 };

 const adminLogIn = async (req, res) => {
     if (req.body.email && req.body.password) {
         let admin = await Admin.findOne({ email: req.body.email });
         if (admin) {
             const validated = await bcrypt.compare(req.body.password, admin.password);
             if (validated) {
                 admin.password = undefined;
                 res.send(admin);
             } else {
                 res.send({ message: "Invalid password" });
             }
         } else {
             res.send({ message: "User not found" });
         }
     } else {
         res.send({ message: "Email and password are required" });
     }
 };

const getAdminDetail = async (req, res) => {
    try {
        let admin = await Admin.findById(req.params.id);
        if (admin) {
            admin.password = undefined;
            res.send(admin);
        }
        else {
            res.send({ message: "No admin found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}


module.exports = { adminRegister, adminLogIn, getAdminDetail };