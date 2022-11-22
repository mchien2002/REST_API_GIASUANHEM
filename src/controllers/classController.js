const BaseController = require("./base/baseController");
const { LIST_CLASS, CLASS_REMOVE, CLASS_UPDATE } = require("../utils/apiConstant");
const { Class } = require("../models/classModel");
const { NewClass } = require("../models/newClassModel");
const { Tutor } = require("../models/tutorModel");

class ClassController extends BaseController {
    constructor() {
        super(Class);
        this.LIST_CLASS = LIST_CLASS;
        this.CLASS_REMOVE = CLASS_REMOVE;
        this.CLASS_UPDATE = CLASS_UPDATE;
    }

    deleteByID() {
        return async (req, res) => {
            await NewClass.updateMany(
                { classes: req.query._id },
                { $pull: { classes: req.query._id } }
            ).catch(error => {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            });
            await Tutor.updateMany(
                { classes: req.query._id },
                { $pull: { classes: req.query._id } }
            ).catch(error => {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            });
            await Class.findByIdAndDelete(req.query._id).then(() => {
                res.status(200).json(this.appStatus.getStatus(200));
            }).catch((error) => {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            });
        }
    }
}

module.exports = ClassController;