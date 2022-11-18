const { Post } = require("../models/postModel");
const ApplicationState = require("../models/applicationState");
const BaseController = require("./base/baseController");
const { LIST_POST, POST_REMOVE, POST_UPDATE } = require("../utils/api_constant");

class PostController extends BaseController {
    constructor() {
        super(Post);
        this.LIST_POST = LIST_POST;
        this.POST_REMOVE = POST_REMOVE;
        this.POST_UPDATE = POST_UPDATE;
    }
    getData() {
        return async (req, res) => {
            try {
                const listItem = await Post.find(
                    req.query.style ? { style: req.query.style } : {}
                );
                res.status(200).json(listItem);
            } catch (error) {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            }
        }
    }
}

module.exports = PostController