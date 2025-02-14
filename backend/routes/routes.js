const express = require('express');
const router = express.Router();
const AdminCon = require('../controllers/AdminCon.js');
const ClassCon = require('../controllers/ClassCon.js');
const { studentRegister, studentLogIn, getStudents, getStudentDetail, deleteStudent, updateStudent, deleteStudentsByClass, updateExamResult } = require('../controllers/StudentCon.js');
const { teacherRegister, teacherLogIn, getTeachers, getTeacherDetail, deleteTeachers, deleteTeacher, updateTeacherSubject } = require('../controllers/TeacherCon.js');

// Root route
router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Admin routes
router.post('/admin/register', AdminCon.adminRegister);
router.post('/admin/login', AdminCon.adminLogIn);
router.get('/admin/:id', AdminCon.getAdminDetail);

// Class routes
router.post('/class/create', ClassCon.sclassCreate);
router.get('/class/list/:id', ClassCon.sclassList);
router.get('/class/detail/:id', ClassCon.getSclassDetail);
router.get('/class/students/:id', ClassCon.getSclassStudents);
router.delete('/class/:id', ClassCon.deleteSclass);
router.delete('/classes/:id', ClassCon.deleteSclasses);

// Student routes
router.post('/student/register', studentRegister);
router.post('/student/login', studentLogIn);
router.get("/Students/:id", getStudents);
router.get("/Student/:id", getStudentDetail);
router.delete("/Students/:id", deleteStudent);
router.delete("/StudentsClass/:id", deleteStudentsByClass);
router.delete("/Student/:id", deleteStudent);
router.put("/Student/:id", updateStudent);
router.put('/UpdateExamResult/:id', updateExamResult);

// Teacher routes
router.post('/teacher/register', teacherRegister);
router.post('/teacher/login', teacherLogIn);
router.get("/teachers/:id", getTeachers);
router.get("/teacher/:_id", getTeacherDetail);
router.delete("/teacher/:id", deleteTeacher);
router.put("/teacher/subject", updateTeacherSubject);

module.exports = router;