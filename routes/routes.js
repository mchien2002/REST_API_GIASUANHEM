const router = require("express").Router();
const accountController = require("../controllers/accountController");
const categorytController = require("../controllers/categoryController");
const classController = require("../controllers/classController");
const newClassController = require("../controllers/newClassController");
const postController = require("../controllers/postController");
const subjectController = require("../controllers/subjectController");


// GET
router.get("/new_class/index", newClassController.get);
router.get("/post/index", postController.get);
router.get("/class/index", classController.get);
router.get("/subject/index", subjectController.get);
router.get("/account/index", accountController.get);
router.get("/category/index", categorytController.get);

// POST
router.post("/new_class/add", newClassController.add);
router.post("/post/add", postController.add);
router.post("/class/add", classController.add);
router.post("/subject/add", subjectController.add);
router.post("/account/add", accountController.add);
router.post("/category/add", categorytController.add);
module.exports = router;