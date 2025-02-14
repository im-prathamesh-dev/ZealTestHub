const { Schema, model } = require("mongoose");


const sclassSchema = new Schema({
    sclassName: {
        type: String,
        required: true,
    },
    college: {
        type: Schema.Types.ObjectId,
        ref: 'admin'
    },
}, { timestamps: true });

// export default model("sclass", sclassSchema);
module.exports = model("sclass", sclassSchema)