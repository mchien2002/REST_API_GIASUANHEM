const { TransactionHistory } = require("../models/transactionHistoryModel")
const BaseController = require("./base/baseController");
const { LIST_TRANSACTION } = require("../utils/api_constant");

class TransactionHistoryController extends BaseController{
    constructor(){
        super(TransactionHistory);
        this.LIST_TRANSACTION = LIST_TRANSACTION;
    }
}
module.exports = TransactionHistoryController;