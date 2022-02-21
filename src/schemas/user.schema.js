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
const bcrypt_1 = require("bcrypt");
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const USER_SCHEMA = new mongoose_1.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'email is required'],
        validate: [validator_1.default.isEmail, 'please enter valid email']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [4, 'password length must be greater than 4 characters']
    },
    notes: [
        {
            title: { type: String },
            content: { type: String },
            delete: { type: Boolean, default: false },
            bg: {
                type: {},
                // default: [ '#fff', '#1a1a1a' ],
                default: ['#fff', '#000'],
            },
        }
    ]
});
USER_SCHEMA.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.isModified('password')) {
            this.password = yield (0, bcrypt_1.hash)(this.password, yield (0, bcrypt_1.genSalt)(10));
            next();
        }
    });
});
const USER_MODEL = (0, mongoose_1.model)('user', USER_SCHEMA);
exports.default = USER_MODEL;
