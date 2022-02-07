"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOneNote = exports.updateNotes = exports.deleteNotes = exports.deleteOneNote = exports.getOneNote = exports.getNotes = exports.createOneNote = exports.createNotes = void 0;
var asyncWrapper_1 = __importDefault(require("../asyncWrapper/asyncWrapper"));
var authUser_1 = require("../middlewares/authUser");
var user_schema_1 = __importDefault(require("../schemas/user.schema"));
exports.createNotes = (0, asyncWrapper_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var logged_user, user, notes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                logged_user = (0, authUser_1.returnLoggedUser)(req, res, next);
                return [4 /*yield*/, user_schema_1.default.findById(logged_user._id)];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, next({ status: 400, error: 'unauthorised user' })];
                notes = req.body.notes;
                notes.forEach(function (note) { return user.notes.push(note); });
                user.save();
                res.status(201).send({ success: true });
                return [2 /*return*/];
        }
    });
}); });
exports.createOneNote = (0, asyncWrapper_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var logged_user, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                logged_user = (0, authUser_1.returnLoggedUser)(req, res, next);
                return [4 /*yield*/, user_schema_1.default.findById(logged_user._id)];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, next({ status: 400, error: 'unauthorised user' })];
                if (!req.body.title && !req.body.content)
                    return [2 /*return*/, next({ error: 'notes can not be blanked' })];
                user.notes.push(req.body);
                user.save();
                res.status(201).send({ success: true });
                return [2 /*return*/];
        }
    });
}); });
// if user wants to get all notes.
exports.getNotes = (0, asyncWrapper_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = (0, authUser_1.returnLoggedUser)(req, res, next);
                return [4 /*yield*/, user_schema_1.default.findById(payload._id).select('notes').select('_id')];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, next({ status: 400, error: 'unauthorized user' })];
                if (!user.notes)
                    return [2 /*return*/, next({ error: 'no notes found' })];
                return [2 /*return*/, res.status(200).send({ notes: user.notes.reverse() })];
        }
    });
}); });
// if user wants to get only one note.
exports.getOneNote = (0, asyncWrapper_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, user, req_note;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = (0, authUser_1.returnLoggedUser)(req, res, next);
                return [4 /*yield*/, user_schema_1.default.findOne({ _id: payload._id })];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, next({ status: 400, error: 'unauthorized user' })];
                if (!user.notes)
                    return [2 /*return*/, next({ error: 'no notes found' })];
                req_note = user.notes.filter(function (note) {
                    var id = req.params.note_id;
                    var note_id = JSON.stringify(note._id).slice(1, -1);
                    return note_id === id;
                });
                if (!req_note.length)
                    return [2 /*return*/, next({ status: 404, error: 'no note found with this id' })];
                else
                    res.status(200).send({ note: req_note[0] });
                return [2 /*return*/];
        }
    });
}); });
// if user wants to delete one note at a time
exports.deleteOneNote = (0, asyncWrapper_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, user, note_id, matchedCount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = (0, authUser_1.returnLoggedUser)(req, res, next);
                return [4 /*yield*/, user_schema_1.default.findById(payload._id)];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, next({ status: 400, error: 'unauthorised user' })];
                note_id = req.params.note_id;
                return [4 /*yield*/, user_schema_1.default.updateOne({ _id: payload._id, 'notes._id': note_id }, { $pull: { 'notes': { '_id': note_id } } })];
            case 2:
                matchedCount = (_a.sent()).matchedCount;
                if (matchedCount)
                    return [2 /*return*/, res.send({ success: true })];
                if (!matchedCount)
                    return [2 /*return*/, next({ status: 404, error: 'no note found with this id' })];
                return [2 /*return*/];
        }
    });
}); });
exports.deleteNotes = (0, asyncWrapper_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, user, failed_req, successed_req, req_notes, i, _id, matchedCount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = (0, authUser_1.returnLoggedUser)(req, res, next);
                return [4 /*yield*/, user_schema_1.default.findById(payload._id)];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, next({ status: 400, error: 'unauthorised user' })];
                failed_req = [];
                successed_req = [];
                req_notes = req.body.notes;
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < req_notes.length)) return [3 /*break*/, 5];
                _id = req_notes[i]._id;
                return [4 /*yield*/, user_schema_1.default.updateOne({ _id: payload._id, 'notes._id': _id }, { $pull: {
                            'notes': { '_id': _id }
                        } })];
            case 3:
                matchedCount = (_a.sent()).matchedCount;
                if (!matchedCount)
                    failed_req.push({ _id: _id });
                else
                    successed_req.push({ _id: _id });
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5:
                if (successed_req.length === 0)
                    next({ status: 500, error: 'could not delete the note' });
                else
                    return [2 /*return*/, res.send({ success: true, successed_req: successed_req, failed_req: failed_req })];
                return [2 /*return*/];
        }
    });
}); });
// if user wants to update one or many notes at once
exports.updateNotes = (0, asyncWrapper_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, user, failed_req, successed_req, req_notes, i, _a, title, content, _id, bg, matchedCount;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                payload = (0, authUser_1.returnLoggedUser)(req, res, next);
                return [4 /*yield*/, user_schema_1.default.findById(payload._id)];
            case 1:
                user = _b.sent();
                if (!user)
                    return [2 /*return*/, next({ status: 400, error: 'unauthorised user' })];
                failed_req = [];
                successed_req = [];
                req_notes = req.body.notes;
                i = 0;
                _b.label = 2;
            case 2:
                if (!(i < req_notes.length)) return [3 /*break*/, 5];
                _a = req_notes[i], title = _a.title, content = _a.content, _id = _a._id, bg = _a.bg;
                return [4 /*yield*/, user_schema_1.default.updateOne({ _id: payload._id, 'notes._id': _id }, { $set: {
                            'notes.$.title': title,
                            'notes.$.content': content,
                            'notes.$.bg': bg && bg
                        } })];
            case 3:
                matchedCount = (_b.sent()).matchedCount;
                if (!matchedCount)
                    failed_req.push({ _id: _id });
                else
                    successed_req.push({ _id: _id });
                _b.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/, res.send({
                    success: true,
                    failed_req: failed_req,
                    successed_req: successed_req
                })];
        }
    });
}); });
// if user wants to update one or many notes at once
exports.updateOneNote = (0, asyncWrapper_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, user, _id, _a, title, content, bg, matchedCount;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                payload = (0, authUser_1.returnLoggedUser)(req, res, next);
                return [4 /*yield*/, user_schema_1.default.findById(payload._id)];
            case 1:
                user = _b.sent();
                if (!user)
                    return [2 /*return*/, next({ status: 400, error: 'unauthorised user' })];
                _id = req.params.note_id;
                _a = req.body, title = _a.title, content = _a.content, bg = _a.bg;
                return [4 /*yield*/, user_schema_1.default.updateOne({ _id: payload._id, 'notes._id': _id }, { $set: {
                            'notes.$.title': title && title,
                            'notes.$.content': content && content,
                            'notes.$.bg': bg && bg
                        } })];
            case 2:
                matchedCount = (_b.sent()).matchedCount;
                if (!matchedCount)
                    return [2 /*return*/, next({ status: 404, error: 'note not found' })];
                return [2 /*return*/, res.send({ success: true })];
        }
    });
}); });
