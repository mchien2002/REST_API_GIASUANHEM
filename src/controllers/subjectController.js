const { Subject } = require("../models/subjectModel");
const BaseController = require("./base/baseController");
const { LIST_SUBJECT, SUBJECT_REMOVE, SUBJECT_UPDATE } = require("../utils/apiConstant");
const { NewClass } = require("../models/newClassModel");
const { Tutor } = require("../models/tutorModel");

class SubjectController extends BaseController {
    constructor() {
        super(Subject);
        this.LIST_SUBJECT = LIST_SUBJECT;
        this.SUBJECT_REMOVE = SUBJECT_REMOVE;
        this.SUBJECT_UPDATE = SUBJECT_UPDATE;
    }

    deleteByID() {
        return async (req, res) => {
            await NewClass.updateMany(
                { subjects: req.query._id },
                { $pull: { subjects: req.query._id } }
            ).catch(error => {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            });
            await Tutor.updateMany(
                { subjects: req.query._id },
                { $pull: { subjects: req.query._id } }
            ).catch(error => {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            });
            await Subject.findByIdAndDelete(req.query._id).then(() => {
                res.status(200).json(this.appStatus.getStatus(200));
            }).catch((error) => {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            });
        }
    }
}

module.exports = SubjectController;