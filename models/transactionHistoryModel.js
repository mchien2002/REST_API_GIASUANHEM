const mongoose = require("mongoose")

const transactionHistorySchema = mongoose.Schema({
    amount: {
        type: Number,
    },
    content: {
        type: String,
    },
    created_at: {
        type: String,
    },
    accountNumber: {
        type: String
    }
})

let TransactionHistory = mongoose.model("TransactionHistory", transactionHistorySchema);

module.exports = { TransactionHistory };