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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogout = exports.handleLogin = exports.handleRegister = void 0;
const asyncWrapper_1 = __importDefault(require("../asyncWrapper/asyncWrapper"));
const user_schema_1 = __importDefault(require("../schemas/user.schema"));
const loginError_1 = __importDefault(require("../utils/loginError"));
const bcrypt_1 = require("bcrypt");
const genLoginToken_1 = __importDefault(require("../utils/genLoginToken"));
const throwRequiredFieldErr_1 = __importDefault(require("../utils/throwRequiredFieldErr"));
exports.handleRegister = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_schema_1.default.create(req.body, (err, user) => {
        if (err)
            return next(err);
        else
            return res.status(201).send({ _id: user._id });
    });
}));
exports.handleLogin = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log((_a = req.headers.origin) === null || _a === void 0 ? void 0 : _a.slice(8));
    const { email, password } = req.body;
    if (!email || !password) {
        (0, throwRequiredFieldErr_1.default)(email, password, next);
    }
    user_schema_1.default.findOne({ email }, (err, user) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        if (!user)
            return next((0, loginError_1.default)('email'));
        else {
            const isTruePass = yield (0, bcrypt_1.compare)(password, user.password);
            if (!isTruePass)
                return next((0, loginError_1.default)('password'));
            else {
                const cookie_name = process.env.COOKIE_NAME || 'cookie_name';
                const cookie = (0, genLoginToken_1.default)(user);
                //also works for local
                res.cookie(cookie_name, cookie, { maxAge: 200000000, sameSite: 'none', secure: true, path: '/', httpOnly: true,
                    domain: process.env.MODE == 'prod' ? (_b = req.headers.origin) === null || _b === void 0 ? void 0 : _b.slice(8) : ''
                    // domain: req.headers.origin?.slice(8)
                });
                //also for local
                // res.cookie(cookie_name,cookie,{maxAge:200000000, sameSite:'none', secure:false, path: '/', httpOnly:true})
                //for local
                // res.cookie(cookie_name,cookie,{maxAge:200000000, sameSite:'none', path: '/', httpOnly:true})
                return res.send({ _id: user._id, email: user.email });
            }
        }
    }));
}));
exports.handleLogout = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cookie_name = process.env.COOKIE_NAME || 'cookie_name';
    return res.cookie(cookie_name, '', { maxAge: 10 }).send({ success: true });
}));
