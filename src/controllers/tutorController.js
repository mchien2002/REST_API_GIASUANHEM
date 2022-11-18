const { Tutor } = require("../models/tutorModel");
const BaseController = require("./base/baseController");
const { LIST_TUTOR, TUTOR_UPDATE, TUTOR_REMOVE } = require("../utils/api_constant");

class TutorContoller extends BaseController {
    constructor() {
        super(Tutor)
        this.LIST_TUTOR = LIST_TUTOR;
        this.TUTOR_REMOVE = TUTOR_REMOVE;
        this.TUTOR_UPDATE = TUTOR_UPDATE;
    }

    getData() {
        return async (req, res) => {
            console.log("********PARAMS********");
            this.params.address = req.query.address;
            this.params.classId = req.query.classId;
            this.params.subId = req.query.subId;
            this.params.gender = req.query.gender;
            this.params.isNow = req.query.isNow;

            console.log(`disId: ${this.params.address}`);
            console.log(`classId: ${this.params.classId}`);
            console.log(`subId: ${this.params.subId}`);
            console.log(`gender: ${this.params.gender}`);
            console.log(`isNow: ${this.params.isNow}`);

            try {
                let data = await Tutor.find({
                    "$and": [
                        this.params.address ? {
                            address: { $regex: this.params.address }
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
                        this.params.gender ? {
                            gender: { $regex: this.params.gender }
                        } : {},
                        this.params.isNow ? {
                            isNow: { $regex: this.params.isNow }
                        } : {},
                    ]
                }).populate("classes").populate("subjects");
                res.status(200).json(data);

            } catch (error) {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            }
        }
    }
}

module.exports = TutorContoller;