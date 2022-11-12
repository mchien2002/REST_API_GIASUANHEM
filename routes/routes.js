const router = require("express").Router();
const newClassController = require("../controllers/newClassController")

// GET
router.get("/new_class/index", newClassController.getAllNewClass);
// POST
router.post("/new_class/add", newClassController.addNewClass);

module.exports = router;