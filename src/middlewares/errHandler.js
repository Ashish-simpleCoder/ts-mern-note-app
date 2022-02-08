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
Object.defineProperty(exports, "__esModule", { value: true });
const errHandler = (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const errors = { email: '', password: '' };
    // if login  credentials are wrong then dev has to show the errors to the user
    const { email, password, status, error } = err;
    if (email || password) {
        email && (errors.email = err.email);
        password && (errors.password = err.password);
        return res.status(status ? status : 200).send({ errors });
    }
    // dev has to show the errors occured during the login process
    if (error) {
        return res.status(status ? status : 200).send({ error });
    }
    // if registered email comes again for registration then dev has to show unique emai error
    if (err.code === 11000) {
        errors.email = 'email is already registered';
        return res.status(500).send({ errors });
    }
    // if validation errors occurs during registration then show the user errors
    if ((_a = err === null || err === void 0 ? void 0 : err.message) === null || _a === void 0 ? void 0 : _a.includes('validation failed')) {
        Object.values(err.errors).forEach((value) => {
            const { path, message } = value === null || value === void 0 ? void 0 : value.properties;
            errors[path] = message;
        });
        return res.status(500).send({ errors });
    }
});
exports.default = errHandler;
