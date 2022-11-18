const mongoose = require("mongoose");

const salaryInfoSchema = new mongoose.Schema({
    grade: { type: String, default: '' },
    styleTeacher: { type: Number, default: 0 },
    twoSessions: { type: String, default: '' },
    threeSessions: { type: String, default: '' },
    fourSessions: { type: String, default: '' },
    fiveSessions: { type: String, default: '' },
}, { versionKey: false, timestamps: true });

let SalaryInfo = mongoose.model("SalaryInfo", salaryInfoSchema);
module.exports = { SalaryInfo };

