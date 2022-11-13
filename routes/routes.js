const router = require("express").Router();
const accountController = require("../controllers/accountController");
const categorytController = require("../controllers/categoryController");
const classController = require("../controllers/classController");
const newClassController = require("../controllers/newClassController");
const postController = require("../controllers/postController");
const subjectController = require("../controllers/subjectController");
const tutorController = require("../controllers/tutorController");
const { LIST_ACCOUNT, LIST_NEWCLASSS, LIST_POST, LIST_CLASS, LIST_SUBJECT, LIST_CATEGORY, NEWCLASS_CREATE, NEWCLASS_UPDATE_STATUS, POST_CREATE, CLASS_CREATE, SUBJECT_CREATE, ACCOUNT_CREATE, CATEGORY_CREATE, LIST_TUTOR, TUTOR_CREATE } = require("../service/api_constant");


// GET
router.get(LIST_NEWCLASSS, newClassController.get);
router.get(LIST_POST, postController.get);
router.get(LIST_CLASS, classController.get);
router.get(LIST_SUBJECT, subjectController.get);
router.get(LIST_ACCOUNT, accountController.get);
router.get(LIST_CATEGORY, categorytController.get);
router.get(LIST_TUTOR, tutorController.get);

// POST
router.post(NEWCLASS_CREATE, newClassController.add);
router.post(NEWCLASS_UPDATE_STATUS, newClassController.updateStatus)
router.post(POST_CREATE, postController.add);
router.post(CLASS_CREATE, classController.add);
router.post(SUBJECT_CREATE, subjectController.add);
router.post(ACCOUNT_CREATE, accountController.add);
router.post(CATEGORY_CREATE, categorytController.add);
router.post(TUTOR_CREATE, tutorController.add);


module.exports = router;