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
exports.returnLoggedUserDetails = exports.returnLoggedUser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const asyncWrapper_1 = __importDefault(require("../asyncWrapper/asyncWrapper"));
const authUser = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const cookie_name = process.env.COOKIE_NAME || 'cookie_name';
    const secret = process.env.SECRET || 'yoursecretkey';
    const cookie = req.cookies[cookie_name];
    (0, jsonwebtoken_1.verify)(cookie, secret, { complete: true }, (err, decoded_token) => {
        if (err)
            return next({ status: 400, error: 'unauthorized user' });
        next();
    });
}));
exports.default = authUser;
const returnLoggedUser = (req, res, next) => {
    const cookie_name = process.env.COOKIE_NAME || 'cookie_name';
    const secret = process.env.SECRET || 'yoursecretkey';
    const cookie = req.cookies[cookie_name];
    let user;
    (0, jsonwebtoken_1.verify)(cookie, secret, { complete: true }, (err, decoded_token) => {
        if (err)
            return next({ status: 400, error: 'unauthorized user' });
        user = decoded_token === null || decoded_token === void 0 ? void 0 : decoded_token.payload;
    });
    return user;
};
exports.returnLoggedUser = returnLoggedUser;
const returnLoggedUserDetails = (req, res, next) => {
    const cookie_name = process.env.COOKIE_NAME || 'cookie_name';
    const secret = process.env.SECRET || 'yoursecretkey';
    const cookie = req.cookies[cookie_name];
    let user;
    (0, jsonwebtoken_1.verify)(cookie, secret, { complete: true }, (err, decoded_token) => {
        if (err)
            return next({ status: 400, error: 'unauthorized user' });
        user = decoded_token === null || decoded_token === void 0 ? void 0 : decoded_token.payload;
    });
    return res.send(user);
};
exports.returnLoggedUserDetails = returnLoggedUserDetails;
