"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var genLoginError = function (type, login) {
    var invalid = 'invalid credentails';
    var status = 400;
    var MODE = process.env.MODE;
    // if user does not enter email or password then throw the below errors
    if (login) {
        if (type === 'email')
            return { email: 'email is required', status: status };
        if (type === 'password')
            return { password: 'password is required', status: status };
    }
    if (MODE === 'dev') {
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
