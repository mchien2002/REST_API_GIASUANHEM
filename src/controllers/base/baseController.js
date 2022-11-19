const { get } = require("https");
const ApplicationState = require("../../models/applicationState");
const { NewClass } = require("../../models/newClassModel");

class BaseController {
    constructor(model) {
        this.model = model;
        this.appStatus = new ApplicationState();
        this.params = {};
        this.page;
        this.PAGE_SIZE;
    }
    getData() {
        return async (req, res) => {
            this.getPPS(req);
            await this.model.find()
                .skip((this.page - 1) * this.PAGE_SIZE)
                .limit(this.PAGE_SIZE)
                .then(data => {
                    res.status(200).json(data)
                })
                .catch(error => {
                    res.status(500).json(this.appStatus.getStatus(500, error.message));
                });
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
    getPPS(req) {
        this.page = parseInt(req.query.page);
        this.PAGE_SIZE = parseInt(req.query.PAGE_SIZE);
    }
}
module.exports = BaseController;