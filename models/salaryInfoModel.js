const mongoose = require("mongoose");

const salaryInfoSchema = new mongoose.Schema({
    grade: {
        type: String
    },
    styleTeacher: {
        type: Number,
    },
    twoSessions: {
        type: Number
    },
    threeSessions: {
        type: Number
    },
    fourSessions: {
        type: Number
    },
    fiveSessions: {
        type: Number
    },
});

let SalaryInfo = mongoose.model("SalaryInfo", salaryInfoSchema);
module.exports = { SalaryInfo };

