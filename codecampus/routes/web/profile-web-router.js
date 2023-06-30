var express = require("express");
var router = express.Router();
const { requireAuth } = require("./../../utils/passport");
const controller = require("../../controllers/web/profile-web-controller");
/* GET home page. */
router.get("/", requireAuth, controller.home);
router.post("/start-path/:id", requireAuth, controller.startPath);

module.exports = router;
