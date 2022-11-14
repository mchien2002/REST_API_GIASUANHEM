const router = require("express").Router();
const accountController = require("../controllers/accountController");
const categorytController = require("../controllers/categoryController");
const classController = require("../controllers/classController");
const newClassController = require("../controllers/newClassController");
const postController = require("../controllers/postController");
const subjectController = require("../controllers/subjectController");
const tutorController = require("../controllers/tutorController");
const { LIST_ACCOUNT, LIST_NEWCLASSS, LIST_POST, LIST_CLASS, LIST_SUBJECT, LIST_CATEGORY, NEWCLASS_CREATE, NEWCLASS_UPDATE_STATUS, POST_CREATE, CLASS_CREATE, SUBJECT_CREATE, ACCOUNT_CREATE, CATEGORY_CREATE, LIST_TUTOR, TUTOR_CREATE, CLASS_REMOVE, CHECK_LOGIN, NEWCLASS_REMOVE, TUTOR_REMOVE, SUBJECT_REMOVE, CATEGORY_REMOVE, NEWCLASS_UPDATE, CLASS_UPDATE, SUBJECT_UPDATE, POST_REMOVE, TUTOR_UPDATE, CATEGORY_UPDATE } = require("../service/api_constant");

// NEW CLASS
router.get(LIST_NEWCLASSS, newClassController.get);
router.post(NEWCLASS_CREATE, newClassController.add);
router.post(NEWCLASS_UPDATE_STATUS, newClassController.updateStatus)
router.post(NEWCLASS_REMOVE, newClassController.delete);
router.post(NEWCLASS_UPDATE, newClassController.updateByID);

// CLASS
router.get(LIST_CLASS, classController.get);
router.post(CLASS_CREATE, classController.add);
router.post(CLASS_REMOVE, classController.delete);
router.post(CLASS_UPDATE, classController.updateByID);


// SUBJECT
router.get(LIST_SUBJECT, subjectController.get);
router.post(SUBJECT_CREATE, subjectController.add);
router.post(SUBJECT_REMOVE, subjectController.delete);
router.post(SUBJECT_UPDATE, subjectController.updateByID);


// POST
router.get(LIST_POST, postController.get);
router.post(POST_CREATE, postController.add);
router.post(POST_REMOVE, postController.delete);
router.post(NEWCLASS_UPDATE, newClassController.updateByID);


// ACCOUNT
// router.post(ACCOUNT_CREATE, accountController.add);
router.post(CHECK_LOGIN, accountController.checkLogin);
// router.get(LIST_ACCOUNT, accountContr);


// TUTOR
router.get(LIST_TUTOR, tutorController.get);
router.post(TUTOR_CREATE, tutorController.add);
router.post(TUTOR_REMOVE, tutorController.delete);
router.post(TUTOR_UPDATE, tutorController.updateByID);

// CATEGORY
router.post(CATEGORY_CREATE, categorytController.add);
router.get(LIST_CATEGORY, categorytController.get);
router.post(CATEGORY_REMOVE, categorytController.delete);
router.post(CATEGORY_UPDATE, categorytController.updateByID);




module.exports = router;