const { Subject } = require("../models/subjectModel");
const BaseController = require("./base/baseController");
const { LIST_SUBJECT, SUBJECT_REMOVE, SUBJECT_UPDATE } = require("../utils/api_constant");

class SubjectController extends BaseController {
    constructor() {
        super(Subject);
        this.LIST_SUBJECT = LIST_SUBJECT;
        this.SUBJECT_REMOVE = SUBJECT_REMOVE;
        this.SUBJECT_UPDATE = SUBJECT_UPDATE;
    }
}

module.exports = SubjectController;