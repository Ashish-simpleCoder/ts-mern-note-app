"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controllers_1 = require("../controllers/user.controllers");
var user_notes_controllers_1 = require("../controllers/user.notes.controllers");
var authUser_1 = __importStar(require("../middlewares/authUser"));
var router = (0, express_1.Router)();
// if user wants to login , register and logout so here are the logics
router.route('/api/v1/user').get(authUser_1.returnLoggedUserDetails).post(user_controllers_1.handleRegister);
router.route('/api/v1/user/login').post(user_controllers_1.handleLogin);
router.route('/api/v1/user/logout').get(user_controllers_1.handleLogout);
// auth middleware for authing the genuine user
router.use(authUser_1.default);
// routes for note, if user wants to access theme
router.route('/api/v1/user/notes').post(user_notes_controllers_1.createNotes).get(user_notes_controllers_1.getNotes).patch(user_notes_controllers_1.updateNotes).delete(user_notes_controllers_1.deleteNotes);
router.route('/api/v1/user/note').post(user_notes_controllers_1.createOneNote); //just for creating one note
router.route('/api/v1/user/notes/:note_id').get(user_notes_controllers_1.getOneNote).delete(user_notes_controllers_1.deleteOneNote).patch(user_notes_controllers_1.updateOneNote);
exports.default = router;
