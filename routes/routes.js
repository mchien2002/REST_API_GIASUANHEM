const router = require("express").Router();
const accountController = require("../controllers/accountController");
const categorytController = require("../controllers/categoryController");
const classController = require("../controllers/classController");
const newClassController = require("../controllers/newClassController");
const postController = require("../controllers/postController");
const subjectController = require("../controllers/subjectController");


// GET
router.get("/new_class/index", newClassController.getAll);
router.get("/post/index", postController.getAll);
router.get("/class/index", classController.getAll);
router.get("/subject/index", subjectController.getAll);
router.get("/account/index", accountController.getAll);
router.get("/category/index", categorytController.getAll);

// POST
router.post("/new_class/add", newClassController.add);
router.post("/post/add", postController.add);
router.post("/class/add", classController.add);
router.post("/subject/add", subjectController.add);
router.post("/account/add", accountController.add);
router.post("/category/add", categorytController.add);
module.exports = router;