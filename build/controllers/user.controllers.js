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
exports.handleLogout = exports.handleLogin = exports.handleRegister = void 0;
var asyncWrapper_1 = __importDefault(require("../asyncWrapper/asyncWrapper"));
var user_schema_1 = __importDefault(require("../schemas/user.schema"));
var loginError_1 = __importDefault(require("../utils/loginError"));
var bcrypt_1 = require("bcrypt");
var genLoginToken_1 = __importDefault(require("../utils/genLoginToken"));
var throwRequiredFieldErr_1 = __importDefault(require("../utils/throwRequiredFieldErr"));
exports.handleRegister = (0, asyncWrapper_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_schema_1.default.create(req.body, function (err, user) {
                    if (err)
                        return next(err);
                    else
                        return res.status(201).send({ _id: user._id });
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
exports.handleLogin = (0, asyncWrapper_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password;
    return __generator(this, function (_b) {
        _a = req.body, email = _a.email, password = _a.password;
        if (!email || !password) {
            (0, throwRequiredFieldErr_1.default)(email, password, next);
        }
        user_schema_1.default.findOne({ email: email }, function (err, user) { return __awaiter(void 0, void 0, void 0, function () {
            var isTruePass, cookie_name, cookie;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!user) return [3 /*break*/, 1];
                        return [2 /*return*/, next((0, loginError_1.default)('email'))];
                    case 1: return [4 /*yield*/, (0, bcrypt_1.compare)(password, user.password)];
                    case 2:
                        isTruePass = _a.sent();
                        if (!!isTruePass) return [3 /*break*/, 3];
                        return [2 /*return*/, next((0, loginError_1.default)('password'))];
                    case 3:
                        cookie_name = process.env.cookie_name || 'cookie_name';
                        return [4 /*yield*/, (0, genLoginToken_1.default)(user)];
                    case 4:
                        cookie = _a.sent();
                        return [2 /*return*/, res.cookie(cookie_name, cookie, { maxAge: 200000000 }).send({ _id: user._id, email: user.email })];
                }
            });
        }); }, {
            runValidators: true,
        });
        return [2 /*return*/];
    });
}); });
exports.handleLogout = (0, asyncWrapper_1.default)(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var cookie_name;
    return __generator(this, function (_a) {
        cookie_name = process.env.cookie_name || 'cookie_name';
        return [2 /*return*/, res.cookie(cookie_name, '', { maxAge: 10 }).send({ success: true })];
    });
}); });
