import { NextFunction, Request, Response } from "express";
import asyncWrapper from "../asyncWrapper/asyncWrapper";
import USER_MODEL, { UserType } from "../schemas/user.schema";
import genLoginError from "../utils/loginError";
import { compare } from "bcrypt";
import generateLoginToken from "../utils/genLoginToken";
import throwRequiredFieldErr from "../utils/throwRequiredFieldErr";

export const handleRegister = asyncWrapper(async(req:Request, res:Response, next:NextFunction)=>{
    await USER_MODEL.create(req.body,(err:Error, user:UserType)=>{
        if(err) return next(err)
        else return res.status(201).send({_id:user._id})
    })
})


export const handleLogin = asyncWrapper(async(req:Request, res:Response, next:NextFunction)=>{
    const {email, password} = req.body
    if(!email || !password){
        throwRequiredFieldErr(email, password, next)
    }


    USER_MODEL.findOne({email}, async(err:Error, user:UserType)=>{
        if(!user) return next(genLoginError('email'))
        else{
            const isTruePass = await compare(password, user.password)
            if(!isTruePass) return next(genLoginError('password'))
            else{
                const cookie_name = process.env.cookie_name || 'cookie_name'
                const cookie = await generateLoginToken(user)
                return res.cookie(cookie_name,cookie,{maxAge:200000000}).send({_id:user._id})
            }
        }
    },{
        runValidators:true,
    })
})


export const handleLogout = asyncWrapper(async(req:Request, res:Response, next:NextFunction)=>{
    const cookie_name = process.env.cookie_name || 'cookie_name'
    return res.cookie(cookie_name,'',{maxAge:10}).send({success:true})
})