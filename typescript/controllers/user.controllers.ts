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
    console.log(req.headers.origin?.slice(8))
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
                const cookie_name = process.env.COOKIE_NAME || 'cookie_name'
                const cookie = generateLoginToken(user)
                //also works for local
                res.cookie(cookie_name,cookie,{maxAge:200000000, sameSite:'none', secure:true, path: '/', httpOnly:true,
                // domain: process.env.MODE == 'prod' ? req.headers.origin?.slice(8) : ''
                // domain: req.headers.origin?.slice(8)
            })
                //also for local
                // res.cookie(cookie_name,cookie,{maxAge:200000000, sameSite:'none', secure:false, path: '/', httpOnly:true})
                //for local
                // res.cookie(cookie_name,cookie,{maxAge:200000000, sameSite:'none', path: '/', httpOnly:true})
                return res.send({_id:user._id, email:user.email})
            }
        }
    })
})


export const handleLogout = asyncWrapper(async(req:Request, res:Response, next:NextFunction)=>{
    const cookie_name = process.env.COOKIE_NAME || 'cookie_name'
    return res.cookie(cookie_name,'',{maxAge:10}).send({success:true})
})