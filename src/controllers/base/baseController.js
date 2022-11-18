const { get } = require("https");
const ApplicationState = require("../../models/applicationState");

class BaseController {
    constructor(model) {
        this.model = model;
        this.appStatus = new ApplicationState();
        this.params = {};
    }
    getData() {
        return async (req, res) => {
            try {
                const listItem = await this.model.find();
                res.status(200).json(listItem);
            } catch (error) {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            }
        }
    }
    addData() {
        return async (req, res) => {
            try {
                const item = await this.model.create(req.body);
                res.status(200).json(this.appStatus.getStatus(200));
            } catch (error) {
                res.status(500).json(this.appStatus.getStatus(200, error.message));
            }
        }
    }
    deleteByID() {
        return async (req, res) => {
            try {
                await this.model.findByIdAndDelete(req.query._id);
                res.status(200).json(this.appStatus.getStatus(200));
            } catch (error) {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            }
        }
    }
    updateByID() {
        return async (req, res) => {
            try {
                this.model.findByIdAndUpdate(req.query._id, { $set: req.body }, function (error, item) {
                    if (error) return next(error);
                    res.status(200).json(this.appStatus.getStatus(200))
                })
            } catch (error) {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            }
        }
    }
}
module.exports = BaseController;