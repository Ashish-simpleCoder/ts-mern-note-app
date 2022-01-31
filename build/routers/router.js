"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controllers_1 = require("../controllers/user.controllers");
var router = (0, express_1.Router)();
router.route('/api/v1/user').get(user_controllers_1.handleLogin).post(user_controllers_1.handleRegister);
router.route('/api/v1/user/logout').get(user_controllers_1.handleLogout);
exports.default = router;
