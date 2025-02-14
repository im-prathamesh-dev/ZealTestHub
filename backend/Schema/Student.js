const { Schema, model } = require("mongoose");


const StudentSchema = new Schema({

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
    Zprofile: {
        type: String,
        required: true,
    },
});

// export default model("Students", StudentSchema)
module.exports = model("Students", StudentSchema)