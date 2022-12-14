const mongoose = require("mongoose")

const transactionHistorySchema = mongoose.Schema({
    amount: { type: Number, default: 0 },
    content: { type: String, default: '' },
    accountNumber: { type: String, default: '' },
    status: {type:Number, default: 0}
}, { versionKey: false, timestamps: true })

let TransactionHistory = mongoose.model("TransactionHistory", transactionHistorySchema);

module.exports = TransactionHistory