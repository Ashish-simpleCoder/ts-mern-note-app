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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const cors_1 = __importDefault(require("cors"));
const { MONGO, PORT, MODE } = process.env;
const mongoose_1 = require("mongoose");
const express_1 = __importStar(require("express"));
const router_1 = __importDefault(require("./routers/router"));
const errHandler_1 = __importDefault(require("./middlewares/errHandler"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const { json } = express_1.default;
const app = (0, express_1.default)();
console.log(MODE);
if (MODE === 'prod') {
    const { join } = require('path');
    // console.log(join(__dirname,'../',"client/build"))
    app.use(express_1.default.static(join(__dirname, '../', 'client/build')));
    (0, mongoose_1.connect)(MONGO || 'mongodb://localhost:27017/your_db').then(() => console.log('db ok')).catch(() => console.log('failed db'));
}
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', 'https://ts-mern-note-app.herokuapp.com', 'https://ashish-simplecoder.github.io/man', 'https://ashish-simplecoder.github.io'],
    // origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT']
}));
app.use(json());
app.use((0, express_1.urlencoded)({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use(router_1.default);
app.use(errHandler_1.default);
app.listen(PORT || 5001);
