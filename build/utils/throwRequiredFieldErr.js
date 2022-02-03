"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loginError_1 = __importDefault(require("./loginError"));
var throwRequiredFieldErr = function (email, password, next) {
    if (!email)
        return next((0, loginError_1.default)('email', 'required'));
    if (!password)
        return next((0, loginError_1.default)('password', 'required'));
};
exports.default = throwRequiredFieldErr;
