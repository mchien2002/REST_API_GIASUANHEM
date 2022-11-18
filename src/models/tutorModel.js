const mongoose = require("mongoose")

const tutorSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    address: { type: String, default: '' },
    email: { type: String, default: '' },
    phone: { type: String, default: '' },
    school: { type: String, default: '' },
    department: { type: String, default: '' },
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class", }],
    teachAreas: [{ type: String, }],
    vehicle: { type: String, default: '' },
    sobuoi: { type: Number, default: 0 },
    gender: { type: String, default: '' },
    birthYear: { type: String, default: '' },
    graduateYear: { type: String, default: '' },
    isNow: { type: String, default: '' },
    describe: { type: String, default: '' },
}, { versionKey: false, timestamps: true })

let Tutor = mongoose.model("Tutor", tutorSchema);
module.exports = { Tutor }