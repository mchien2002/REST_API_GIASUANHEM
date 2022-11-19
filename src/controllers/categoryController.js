const { Category } = require("../models/categoryModel");
const BaseController = require("../controllers/base/baseController");
const { LIST_CATEGORY, CATEGORY_REMOVE, CATEGORY_UPDATE } = require("../utils/api_constant");
const { NewClass } = require("../models/newClassModel");
const { Tutor } = require("../models/tutorModel");

class CategoryController extends BaseController {
    constructor() {
        super(Category);
        this.LIST_CATEGORY = LIST_CATEGORY;
        this.CATEGORY_REMOVE = CATEGORY_REMOVE;
        this.CATEGORY_UPDATE = CATEGORY_UPDATE;
    }

    getData() {
        return async (req, res) => {
            this.params.style = req.query.style;
            try {
                const item = await Category.find(this.params.style ? {
                    style: this.params.style,
                } : {});
                res.status(200).json(item);
            } catch (error) {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            }
        }
    }

    deleteByID() {
        return async (req, res) => {
            await NewClass.updateMany(
                { categories: req.query._id },
                { $pull: { categories: req.query._id } }
            ).catch(error => {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            });
            await Category.findByIdAndDelete(req.query._id).then(() => {
                res.status(200).json(this.appStatus.getStatus(200));
            }).catch((error) => {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            }); 
        }
    }
}
module.exports = CategoryController;