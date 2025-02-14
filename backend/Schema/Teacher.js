const { Schema, model } = require("mongoose");

const TeacherSchema = new Schema({
    name: {
        type: String,
        default: "ABC",
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        default: "ABC@123",
    },
    role: {
        type: String,
        default: "Teacher"
    },
    college: {
        type: Schema.Types.ObjectId,
        ref: 'College',
        required: true
    },
    teachSubject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    teachSclass: {
        type: Schema.Types.ObjectId,
        ref: 'Sclass',
        required: true
    }
});

module.exports = model("Teacher", TeacherSchema);