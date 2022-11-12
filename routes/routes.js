const router = require("express").Router();
const classController = require("../controllers/classController");
const newClassController = require("../controllers/newClassController");
const postController = require("../controllers/postController");
const subjectController = require("../controllers/subjectController");


// GET
router.get("/new_class/index", newClassController.getAll);
router.get("/post/index", postController.getAll);
router.get("/class/index", classController.getAll);
router.get("/subject/index", subjectController.getAll);
router.get("/account/index");
// POST
router.post("/new_class/add", newClassController.add);
router.post("/post/add", postController.add);
router.post("/class/add", classController.add);
router.post("/subject/add", subjectController.add);
router.post("/account/add", );

module.exports = router;