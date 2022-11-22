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
router.post(routes.LIST_NEWCLASS, newClassController.create);
router.post(routes.NEWCLASS_UPDATE_STATUS, newClassController.updateStatus);
router.post(routes.NEWCLASS_REMOVE, newClassController.deleteByID);
router.post(routes.NEWCLASS_UPDATE, newClassController.updateByID);

// CLASS
router.get(routes.LIST_CLASS, classController.find);
router.post(routes.LIST_CLASS, classController.create);
router.post(routes.CLASS_REMOVE, classController.deleteByID);
router.post(routes.CLASS_UPDATE, classController.updateByID);


// SUBJECT
router.get(routes.LIST_SUBJECT, subjectController.find);
router.post(routes.LIST_SUBJECT, subjectController.create);
router.post(routes.SUBJECT_REMOVE, subjectController.deleteByID);
router.post(routes.SUBJECT_UPDATE, subjectController.updateByID);


// POST
router.get(routes.LIST_POST, postController.find);
router.post(routes.LIST_POST, postController.create);
router.post(routes.POST_REMOVE, postController.deleteByID);
router.post(routes.POST_UPDATE, postController.updateByID);


// ACCOUNT
router.post(routes.CHECK_LOGIN, accountController.checkLogin);
router.get(routes.GETALL_ADMIN, verifyTokenController.verifyToken, accountController.getAminAcc);

// TUTOR
router.get(routes.LIST_TUTOR, tutorController.find);
router.post(routes.LIST_TUTOR, tutorController.create);
router.post(routes.TUTOR_REMOVE, tutorController.deleteByID);
router.post(routes.TUTOR_UPDATE, tutorController.updateByID);

// CATEGORY
router.get(routes.LIST_CATEGORY, categoryController.find);
router.post(routes.LIST_CATEGORY, categoryController.create);
router.post(routes.CATEGORY_REMOVE, categoryController.deleteByID);
router.post(routes.CATEGORY_UPDATE, categoryController.updateByID);

// SALARY INFGO
router.get(routes.LIST_SALARYINFO, salaryInfoController.find);
router.post(routes.LIST_SALARYINFO, salaryInfoController.create);
router.post(routes.SALARYINFO_REMOVE, salaryInfoController.deleteByID);
router.post(routes.SALARYINFO_UPDATE, salaryInfoController.updateByID);

// TRANSACTION
router.get(routes.LIST_TRANSACTION, transactionHistoryController.find);
router.post(routes.LIST_TRANSACTION, transactionHistoryController.create);

module.exports = router;

