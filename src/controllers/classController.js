const BaseController = require("./base/baseController");
const {LIST_CLASS, CLASS_REMOVE, CLASS_UPDATE} =    require("../utils/api_constant");
const { Class } = require("../models/classModel");

class ClassController extends BaseController{
    constructor(){
        super(Class);
        this.LIST_CLASS = LIST_CLASS;
        this.CLASS_REMOVE = CLASS_REMOVE;
        this.CLASS_UPDATE = CLASS_UPDATE;
    }
}

module.exports = ClassController;