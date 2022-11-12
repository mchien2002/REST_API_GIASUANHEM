const router = require("express").Router();
const newClassController = require("../controllers/newClassController");
const postController = require("../controllers/postController");

// GET
router.get("/new_class/index", newClassController.getAllNewClass);
router.get("/post/index", postController.getAllPost);
// POST
router.post("/new_class/add", newClassController.addNewClass);
router.post("/post/add", postController.addPost);

module.exports = router;