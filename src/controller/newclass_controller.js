const { NewClass } = require("../models/newClassModel");

const newClassController = module.exports = {
    find: async (req, res) => {
        params = {
            ctgId: req.query.ctgId,
            classId: req.query.classId,
            subId: req.query.subId,
            page: parseInt(req.query.page),
            PAGE_SIZE: parseInt(req.query.PAGE_SIZE)
        }

        await NewClass.find({
            "$and": [
                params.ctgId ? { categories: { _id: params.ctgId } } : {},
                params.classId ? { classes: { _id: params.classId } } : {},
                params.subId ? { subjects: { _id: params.subId } } : {},
            ]
        })
            .populate("classes").populate("subjects").populate("categories")
            .skip((params.page - 1) * params.PAGE_SIZE)
            .limit(params.PAGE_SIZE)
            .then((data) => {

                res.status(200).json(data)
            })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            });
    },
    create: async (req, res) => {
        NewClass.findOne({}).sort({ id: "desc" }).then(async latestNewClass => {
            if (latestNewClass) {
                req.body.id = latestNewClass.id + 1;
            } else {
                req.body.id = 1;
            }
            const newItem = await NewClass.create(req.body);
            res.status(200).json({
                status: 200,
                message: "Successfull"
            });
        }).catch(error => {
            console.log(error.message);
            res.status(500).json({
                status: 500,
                message: "Some thing went wrong!",
            });
        });
    },
    deleteByID: async (req, res) => {
        await NewClass.findByIdAndDelete(req.query._id)
            .then(() => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull"
                })
            })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            });
    },
    updateByID: async (req, res) => {
        await NewClass.findByIdAndUpdate(req.query._id, { $set: req.body })
            .then(() => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull"
                })
            })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            });
    },
    updateStatus: async (req, res) => {
        await NewClass.findByIdAndUpdate(req.query._id, { $set: { status: req.query.status } })
            .then(() => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull"
                })
            })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            });
    }
}