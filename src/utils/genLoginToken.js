"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const generateLoginToken = (user) => {
    const secret = process.env.SECRET || 'yoursecretkey';
    return (0, jsonwebtoken_1.sign)({ email: user.email, _id: user._id }, secret);
};
exports.default = generateLoginToken;
