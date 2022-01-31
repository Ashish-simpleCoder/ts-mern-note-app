"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var genLoginError = function (type) {
    var invalid = 'invalid credentails';
    var status = 400;
    var mode = process.env.mode;
    if (mode === 'dev') {
        if (type === 'email')
            return { email: 'email is invalid', status: status };
        if (type === 'password')
            return { password: 'password is invalid', status: status };
    }
    else {
        return { error: invalid, status: status };
    }
};
exports.default = genLoginError;
