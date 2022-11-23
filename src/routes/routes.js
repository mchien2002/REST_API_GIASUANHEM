const router = require("express").Router();
const AccountController = require("../controllers/accountController");
const CategoryController = require("../controllers/categoryController");
const ClassController = require("../controllers/classController");
const NewClassController = require("../controllers/newClassController");
const PostController = require("../controllers/postController");
const SalaryInfoController = require("../controllers/salaryInfoController");
const SubjectController = require("../controllers/subjectController");
const TransactionHistoryController = require("../controllers/transactionHistoryController");
const TutorContoller = require("../controllers/tutorController");


// NEW CLASS
const newClassController = new NewClassController();
router.get(newClassController.LIST_NEWCLASS, newClassController.getData());
router.post(newClassController.LIST_NEWCLASS, newClassController.addData());
router.post(newClassController.NEWCLASS_UPDATE_STATE, newClassController.updateStatus());
router.post(newClassController.NEWCLASS_REMOVE, newClassController.deleteByID());
router.post(newClassController.NEWCLASS_UPDATE, newClassController.updateByID());

// CLASS
const classController = new ClassController();
router.get(classController.LIST_CLASS, classController.getData());
router.post(classController.LIST_CLASS, classController.addData());
router.post(classController.CLASS_REMOVE, classController.deleteByID());
router.post(classController.CLASS_UPDATE, classController.updateByID());


// SUBJECT
const subjectController = new SubjectController();
router.get(subjectController.LIST_SUBJECT, subjectController.getData());
router.post(subjectController.LIST_SUBJECT, subjectController.addData());
router.post(subjectController.SUBJECT_REMOVE, subjectController.deleteByID());
router.post(subjectController.SUBJECT_UPDATE, subjectController.updateByID());


// POST
const postController = new PostController();
router.get(postController.LIST_POST, postController.getData());
router.post(postController.LIST_POST, postController.addData());
router.post(postController.POST_REMOVE, postController.deleteByID());
router.post(postController.POST_UPDATE, postController.updateByID());


// ACCOUNT
const accountController = new AccountController();
router.post(accountController.CHECK_LOGIN, accountController.checkLogin());


// TUTOR
const tutorController = new TutorContoller()
router.get(tutorController.LIST_TUTOR, tutorController.getData());
router.post(tutorController.LIST_TUTOR, tutorController.addData());
router.post(tutorController.TUTOR_REMOVE, tutorController.deleteByID());
router.post(tutorController.TUTOR_UPDATE, tutorController.updateByID());

// CATEGORY
const categoryController = new CategoryController();
router.get(categoryController.LIST_CATEGORY, categoryController.getData());
router.get(categoryController.CATEGORY_BY_ID, categoryController.findByID());
router.post(categoryController.LIST_CATEGORY, categoryController.addData());
router.post(categoryController.CATEGORY_REMOVE, categoryController.deleteByID());
router.post(categoryController.CATEGORY_UPDATE, categoryController.updateByID());

// SALARY INFGO
const salaryInfoController = new SalaryInfoController;
router.get(salaryInfoController.LIST_SALARYINFO, salaryInfoController.getData());
router.post(salaryInfoController.LIST_SALARYINFO, salaryInfoController.addData());
router.post(salaryInfoController.SALARYINFO_REMOVE, salaryInfoController.deleteByID());
router.post(salaryInfoController.SALARYINFO_UPDATE, salaryInfoController.updateByID());

// TRANSACTION
const transactionHistoryController = new TransactionHistoryController();
router.get(transactionHistoryController.LIST_TRANSACTION, transactionHistoryController.getData());
router.post(transactionHistoryController.LIST_TRANSACTION, transactionHistoryController.addData());

module.exports = router;

