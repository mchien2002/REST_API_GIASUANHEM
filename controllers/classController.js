const {Class} = require("../models/classModel");

const classController = {
    add: async(req, res) =>{
        try{
            const tempClass = new Class(req.body);
            const saveClass = await tempClass.save();
            res.status(200).json(saveClass); 
        } catch(error){
            res.status(500).json(error);
        }
    },
    get: async (req, res)=>{
        try{
            const tempClass = await Class.find();
            res.status(200).json(tempClass);
        } catch(error){
            res.status(500).json(error);
        }
    }
}

module.exports = classController;