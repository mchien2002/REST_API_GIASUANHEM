const { Subject } = require("../models/subjectModel");
const ApplicationState = require("../models/applicationState")

const subjectController = {
    add: async (req, res) => {
        try {
        const newItem = new Subject(req.body);
        const saveItem = await newItem.save();
        res.status(200).json(saveItem);
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },

    get: async (req, res) => {
        try {
            const list = await Subject.find();
            res.status(200).json(list);
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    delete: async(req, res) =>{
        try{
            const itemRemove = await Subject.findByIdAndDelete({
                _id: req.query._id
            });
            res.status(200).json(new ApplicationState(200));
        } catch(error){
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    updateByID: async (req, res) => {
        try {
            Subject.findByIdAndUpdate(req.query._id, { $set: req.body }, function (error, item) {
                if (error) return next(error);
                res.status(200).json(new ApplicationState(200))
            })
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    }
}

module.exports = subjectController;