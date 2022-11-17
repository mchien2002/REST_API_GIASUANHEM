const {Class} = require("../models/classModel");
const ApplicationState = require("../models/applicationState")

const classController = {
    add: async(req, res) =>{
        try{
            const tempClass = new Class(req.body);
            const saveClass = await tempClass.save();
            res.status(200).json(saveClass); 
        } catch(error){
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    get: async (req, res)=>{
        try{
            const tempClass = await Class.find();
            res.status(200).json(tempClass);
        } catch(error){
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    delete: async(req, res)=>{
        try{
            await Class.findByIdAndDelete(req.query._id);
            res.status(200).json(new ApplicationState(200));   
        } catch(error){
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    updateByID: async (req, res) => {
        try {
            Class.findByIdAndUpdate(req.query._id, { $set: req.body }, function (error, item) {
                if (error) return next(error);
                res.status(200).json(new ApplicationState(200))
            })
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    }
}

module.exports = classController;