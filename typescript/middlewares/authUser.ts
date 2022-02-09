import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import asyncWrapper from "../asyncWrapper/asyncWrapper";

const authUser = asyncWrapper(async(req:Request, res:Response, next:NextFunction)=>{
    const cookie_name = process.env.COOKIE_NAME || 'cookie_name'
    const secret = process.env.SECRET || 'yoursecretkey'
    const cookie = req.cookies[cookie_name]
    verify(cookie, secret,{complete:true}, (err, decoded_token)=>{
        if(err) return next({status:400,error:'unauthorized user'})
        next()
    })
})
export default authUser


export const returnLoggedUser = (req:Request, res:Response, next:NextFunction)=>{
    const cookie_name = process.env.COOKIE_NAME || 'cookie_name'
    const secret = process.env.SECRET || 'yoursecretkey'
    const cookie = req.cookies[cookie_name]
    let user;
    verify(cookie, secret,{complete:true}, (err, decoded_token)=>{
        if(err) return next({status:400,error:'unauthorized user'})
        user = decoded_token?.payload
    })
    return user
}
export const returnLoggedUserDetails = (req:Request, res:Response, next:NextFunction)=>{
    const cookie_name = process.env.COOKIE_NAME || 'cookie_name'
    const secret = process.env.SECRET || 'yoursecretkey'
    const cookie = req.cookies[cookie_name]
    let user;
    verify(cookie, secret,{complete:true}, (err, decoded_token)=>{
        if(err) return next({status:400,error:'unauthorized user'})
        user = decoded_token?.payload
    })
    return res.send(user)
}