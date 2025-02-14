const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
    name: {
        type: String,
        default: "Admin",
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        default: "admin@123",
    },
    role: {
        type: String,
        default: "Admin"
    }
    
});

module.exports = model("admin", adminSchema)