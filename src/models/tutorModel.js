const mongoose = require("mongoose")

const tutorSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String
    },
    school: {
        type: String
    },
    department: {
        type: String
    },
    subjects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject"
        }
    ],
    classes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
        }
    ],
    teachAreas: [
        {
            type: String,
        }
    ],
    vehicle: {
        type: String
    },
    sobuoi: {
        type: Number
    },
    gender: {
        type: String,
    },
    birthYear: {
        type: String,
    },
    graduateYear: {
        type: String
    },
    isNow: {
        type: String,
    },
    describe: {
        type: String,
    },
}, { versionKey: false, timestamps: true })

let Tutor = mongoose.model("Tutor", tutorSchema);
module.exports = { Tutor }