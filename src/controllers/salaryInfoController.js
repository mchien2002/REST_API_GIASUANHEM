const { SalaryInfo } = require("../models/salaryInfoModel");
const BaseController = require("./base/baseController");
const { LIST_SALARYINFO, SALARYINFO_REMOVE, SALARYINFO_UPDATE } = require("../utils/api_constant");

class SalaryInfoController extends BaseController {
    constructor() {
        super(SalaryInfo);
        this.LIST_SALARYINFO = LIST_SALARYINFO;
        this.SALARYINFO_REMOVE = SALARYINFO_REMOVE;
        this.SALARYINFO_UPDATE = SALARYINFO_UPDATE;
    }
    getData() {
        return async (req, res) => {
            try {
                const newPost = await SalaryInfo.find(
                    req.query.style ? {
                        styleTeacher: req.query.style,
                    } : {}
                );
                res.status(200).json(newPost);
            } catch (error) {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            }
        }
    }
}

module.exports = SalaryInfoController