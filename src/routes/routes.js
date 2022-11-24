const router = require("express").Router();
const categoryController = require("../controller/category_controller");
const newClassController = require("../controller/newclass_controller");
const postController = require("../controller/post_controller");
const salaryInfoController = require("../controller/salaryinfo_controller");
const subjectController = require("../controller/subject_controller");
const transactionHistoryController = require("../controller/transaction_controller");
const tutorController = require("../controller/tutor_controller");
const verifyTokenController = require('../controller/middlewares/verifyTokenController');
const routes = require('../utils/apiConstant');
const accountController = require('../controller/account_controller');
const classController = require('../controller/class_controller');


// NEW CLASS
router.get(routes.LIST_NEWCLASS, newClassController.find);
router.get(routes.NEW_CLASS_BY_ID, newClassController.findByID);
router.post(routes.LIST_NEWCLASS, verifyTokenController.verifyToken, newClassController.create);
router.post(routes.NEWCLASS_UPDATE_STATUS, newClassController.updateStatus);
router.post(routes.NEWCLASS_REMOVE, verifyTokenController.verifyToken, newClassController.deleteByID);
router.post(routes.NEWCLASS_UPDATE, verifyTokenController.verifyToken, newClassController.updateByID);

// CLASS
router.get(routes.LIST_CLASS, classController.find);
router.get(routes.CLASS_BY_ID, classController.findByID);
router.post(routes.LIST_CLASS, verifyTokenController.verifyToken, classController.create);
router.post(routes.CLASS_REMOVE, verifyTokenController.verifyToken, classController.deleteByID);
router.post(routes.CLASS_UPDATE, verifyTokenController.verifyToken, classController.updateByID);


// SUBJECT
router.get(routes.LIST_SUBJECT, subjectController.find);
router.get(routes.SUBJECT_BY_ID, subjectController.findByID);
router.post(routes.LIST_SUBJECT, verifyTokenController.verifyToken, subjectController.create);
router.post(routes.SUBJECT_REMOVE, verifyTokenController.verifyToken, verifyTokenController.verifyToken, subjectController.deleteByID);
router.post(routes.SUBJECT_UPDATE, verifyTokenController.verifyToken, subjectController.updateByID);


// POST
router.get(routes.LIST_POST, postController.find);
router.get(routes.POST_BY_ID, postController.findByID);
router.post(routes.LIST_POST, verifyTokenController.verifyToken, postController.create);
router.post(routes.POST_REMOVE, verifyTokenController.verifyToken, postController.deleteByID);
router.post(routes.POST_UPDATE, verifyTokenController.verifyToken, postController.updateByID);


// ACCOUNT
router.post(routes.CHECK_LOGIN, accountController.checkLogin);
router.get(routes.GET_ADMIN, verifyTokenController.verifyToken, accountController.getAminAcc);

// TUTOR
router.get(routes.LIST_TUTOR, tutorController.find);
router.get(routes.TUTOR_BY_ID, tutorController.findByID);
router.post(routes.LIST_TUTOR, verifyTokenController.verifyToken, tutorController.create);
router.post(routes.TUTOR_REMOVE, verifyTokenController.verifyToken, tutorController.deleteByID);
router.post(routes.TUTOR_UPDATE, verifyTokenController.verifyToken, tutorController.updateByID);

// CATEGORY
router.get(routes.LIST_CATEGORY, categoryController.find);
router.get(routes.CATEGORY_BY_ID, categoryController.findByID);
router.post(routes.LIST_CATEGORY, verifyTokenController.verifyToken, categoryController.create);
router.post(routes.CATEGORY_REMOVE, verifyTokenController.verifyToken, categoryController.deleteByID);
router.post(routes.CATEGORY_UPDATE, verifyTokenController.verifyToken, categoryController.updateByID);

// SALARY INFGO
router.get(routes.LIST_SALARYINFO, salaryInfoController.find);
router.get(routes.SALARY_BY_ID, salaryInfoController.findByID);
router.post(routes.LIST_SALARYINFO, verifyTokenController.verifyToken, salaryInfoController.create);
router.post(routes.SALARYINFO_REMOVE, verifyTokenController.verifyToken, salaryInfoController.deleteByID);
router.post(routes.SALARYINFO_UPDATE, verifyTokenController.verifyToken, salaryInfoController.updateByID);

// TRANSACTION
router.get(routes.LIST_TRANSACTION, transactionHistoryController.find);
router.post(routes.LIST_TRANSACTION, verifyTokenController.verifyToken, transactionHistoryController.create);

module.exports = router;

