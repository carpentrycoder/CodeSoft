const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const SignupSchema = require("../validators/auth-validate");
//const validateMiddleware = require("../middleware/validate-middleware");



router.route("/").get(authcontrollers.home);

router.route("/SignupPage").post(authcontrollers.SignupPage);
router.route("/login").post(authcontrollers.login);



module.exports = router;