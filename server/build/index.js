"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var cors_1 = __importDefault(require("cors"));
var _a = process.env, mongo = _a.mongo, port = _a.port, mode = _a.mode;
var mongoose_1 = require("mongoose");
(0, mongoose_1.connect)(mongo || 'mongodb://localhost:27017/your_db').then(function () { return console.log('db ok'); }).catch(function () { return console.log('failed db'); });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./routers/router"));
var errHandler_1 = __importDefault(require("./middlewares/errHandler"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var json = express_1.default.json;
var app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: mode === 'prod' ? 'https://ashish-simplecoder.github.io/ts-mern-note-app/' : 'http://localhost:3000'
}));
app.use(json());
// app.use(urlencoded({extended:true}))
app.use((0, cookie_parser_1.default)());
app.use(router_1.default);
app.use(errHandler_1.default);
app.listen(port || 5001);
