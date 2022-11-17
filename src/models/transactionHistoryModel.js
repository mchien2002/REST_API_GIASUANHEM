const mongoose = require("mongoose")

const transactionHistorySchema = mongoose.Schema({
    amount: {
        type: Number,
    },
    content: {
        type: String,
    },
    accountNumber: {
        type: String
    }
} ,{ versionKey: false, timestamps: true })

let TransactionHistory = mongoose.model("TransactionHistory", transactionHistorySchema);

module.exports = { TransactionHistory };