const { Class } = require("../models/classModel");
const { Subject } = require("../models/subjectModel");
const { NewClass } = require("../models/newClassModel");
const { Category } = require("../models/categoryModel");
const BaseController = require("./base/baseController");
const { LIST_NEWCLASSS, NEWCLASS_REMOVE, NEWCLASS_UPDATE, NEWCLASS_UPDATE_STATUS } = require("../utils/api_constant");

class NewwClassController extends BaseController {
    constructor() {
        super(NewClass);
        this.LIST_NEWCLASS = LIST_NEWCLASSS;
        this.NEWCLASS_REMOVE = NEWCLASS_REMOVE;
        this.NEWCLASS_UPDATE = NEWCLASS_UPDATE;
        this.NEWCLASS_UPDATE_STATE = NEWCLASS_UPDATE_STATUS;
    }
    getData() {
        return async (req, res) => {
            console.log("********PARAMS********");
            this.params.disId = req.query.disId;
            this.params.classId = req.query.classId;
            this.params.subId = req.query.subId;
            this.params.newClassId = req.query._id;

            console.log(`disId: ${this.params.disId}`);
            console.log(`classId: ${this.params.classId}`);
            console.log(`subId: ${this.params.subId}`);
            try {
                let data = await NewClass.find({
                    "$and": [
                        this.params.disId ? {
                            categories: {
                                _id: this.params.disId
                            }
                        } : {},
                        this.params.classId ? {
                            classes: {
                                _id: this.params.classId
                            }
                        } : {},
                        this.params.subId ? {
                            subjects: {
                                _id: this.params.subId
                            }
                        } : {},
                    ]
                }).populate("classes").populate("categories").populate("subjects");
                res.status(200).json(data);

            } catch (error) {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            }
        }
    }
    updateStatus() {
        return async (req, res) => {
            try {
                NewClass.findByIdAndUpdate(req.query._id, { $set: req.body }, function (error, item) {
                    if (error) return next(error);
                    res.status(200).json(this.appStatus.getStatus(200))
                })
            } catch (error) {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            }
        }
    }
}

module.exports = NewwClassController;;