const mongoose = require("mongoose");

const salaryInfoSchema = new mongoose.Schema({
    grade: {
        type: String
    },
    styleTeacher: {
        type: Number,
    },
    twoSessions: {
        type: String
    },
    threeSessions: {
        type: String
    },
    fourSessions: {
        type: String
    },
    fiveSessions: {
        type: String
    },
} ,{ versionKey: false, timestamps: true });

let SalaryInfo = mongoose.model("SalaryInfo", salaryInfoSchema);
module.exports = { SalaryInfo };

