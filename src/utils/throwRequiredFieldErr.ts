import { NextFunction } from "express"
import genLoginError from "./loginError"

const throwRequiredFieldErr = (email:string, password:string, next:NextFunction)=>{
    if(!email) return next(genLoginError('email','required'))
    if(!password) return next(genLoginError('password','required'))
}
export default throwRequiredFieldErr