import { NextFunction, Request, Response } from "express";
import asyncWrapper from "../asyncWrapper/asyncWrapper";
import { returnLoggedUser } from "../middlewares/authUser";
import USER_MODEL, { UserType } from "../schemas/user.schema";

export const createNotes = asyncWrapper(async(req:Request, res:Response, next:NextFunction)=>{
    const logged_user:any = returnLoggedUser(req, res, next)
    const user:UserType = await USER_MODEL.findById(logged_user._id)
    if(!user) return next({status:400,error:'unauthorised user'})

    const notes:{title:string,content:string}[] = req.body.notes
    notes.forEach(note=> user.notes.push(note) )
    user.save()
    res.status(201).send({success:true})
})
export const createOneNote = asyncWrapper(async(req:Request, res:Response, next:NextFunction)=>{
    const logged_user:any = returnLoggedUser(req, res, next)
    const user:UserType = await USER_MODEL.findById(logged_user._id)
    if(!user) return next({status:400,error:'unauthorised user'})
    if(!req.body.title && !req.body.content) return next({error:'notes can not be blanked', mode:'note'})
    user.notes.push(req.body)
    user.save()
    res.status(201).send({success:true})
})



// if user wants to get all notes.
export const getNotes = asyncWrapper(async(req:Request,res:Response,next:NextFunction)=>{
    const payload:any = returnLoggedUser(req,res,next)
    const user:UserType = await USER_MODEL.findById(payload._id).select('notes').select('_id')
    if(!user) return next({status:400,error:'unauthorized user'})
    if(!user.notes) return next({error:'no notes found'})
    return res.status(200).send({notes:user.notes.reverse()})
})
// if user wants to get only one note.
export const getOneNote = asyncWrapper(async(req:Request,res:Response,next:NextFunction)=>{
    const payload:any = returnLoggedUser(req,res,next)
    const user:UserType = await USER_MODEL.findOne({_id:payload._id},)

    if(!user) return next({status:400,error:'unauthorized user'})
    if(!user.notes) return next({error:'no notes found'})

    const req_note = user.notes.filter(note=>{
        const id = req.params.note_id
        const note_id = JSON.stringify(note._id).slice(1,-1)
        return note_id === id
    })
    if(!req_note.length) return next({status:404,error:'no note found with this id'})
    else res.status(200).send({note:req_note[0]})
})



// if user wants to delete one note at a time
export const deleteOneNote = asyncWrapper(async(req:Request, res:Response, next:NextFunction)=>{
    const payload:any = returnLoggedUser(req,res,next)
    const user:UserType = await USER_MODEL.findById(payload._id)
    if(!user) return next({status:400,error:'unauthorised user'})
    const note_id = req.params.note_id

    if(req.body.RESTORE){
        console.log('restore')
        const {matchedCount} = await USER_MODEL.updateOne({_id:payload._id,'notes._id':note_id},{$set:{'notes.$.delete':false}})
        if(matchedCount) return res.send({success:true})
        if(!matchedCount) return next({status:404, error:'no note found with this id'})
    }
    if(req.body.MOVE_TO_BIN){
        const {matchedCount} = await USER_MODEL.updateOne({_id:payload._id,'notes._id':note_id},{$set:{'notes.$.delete':true}})
        if(matchedCount) return res.send({success:true})
        if(!matchedCount) return next({status:404, error:'no note found with this id'})
    }
    const {matchedCount} = await USER_MODEL.updateOne({_id:payload._id,'notes._id':note_id},{$pull:{'notes':{'_id':note_id}}})
    if(matchedCount) return res.send({success:true})
    if(!matchedCount) return next({status:404, error:'no note found with this id'})
})
export const deleteNotes = asyncWrapper(async(req:Request, res:Response, next:NextFunction)=>{
    const payload:any = returnLoggedUser(req,res,next)
    const user:UserType = await USER_MODEL.findById(payload._id)
    if(!user) return next({status:400,error:'unauthorised user'})
    let failed_req:{_id:string}[] = []
    let successed_req:{_id:string}[] = []

    const req_notes:{title:string,content:string,_id:string,bg:string}[] = req.body.notes
    for(let i=0; i<req_notes.length; i++){
        const {_id} = req_notes[i]
        const {matchedCount} = await USER_MODEL.updateOne(
            {_id:payload._id,'notes._id':_id},
            {$pull:{
                'notes':{'_id':_id}
            }}
        )
        if(!matchedCount) failed_req.push({_id})
        else successed_req.push({_id})
    }
    if(successed_req.length === 0) next({status:500, error:'could not delete the note'})
    else return res.send({success:true,successed_req,failed_req})
})



// if user wants to update one or many notes at once
export const updateNotes = asyncWrapper(async(req:Request, res:Response, next:NextFunction)=>{
    const payload:any = returnLoggedUser(req,res,next)
    const user:UserType = await USER_MODEL.findById(payload._id)
    if(!user) return next({status:400,error:'unauthorised user'})


    let failed_req:{_id:string}[] = []
    let successed_req:{_id:string}[] = []

    const req_notes:{title:string,content:string,_id:string,bg:string}[] = req.body.notes
    for(let i=0; i<req_notes.length; i++){
        const {title, content, _id, bg} = req_notes[i]
        const {matchedCount} = await USER_MODEL.updateOne(
            {_id:payload._id,'notes._id':_id},
            {$set:{
                'notes.$.title':title,
                'notes.$.content':content,
                'notes.$.bg':bg && bg
            }}
        )
        if(!matchedCount) failed_req.push({_id})
        else successed_req.push({_id})
    }

    return res.send({
            success : true,
            failed_req,
            successed_req
        })

})

// if user wants to update one or many notes at once
export const updateOneNote = asyncWrapper(async(req:Request, res:Response, next:NextFunction)=>{
    const payload:any = returnLoggedUser(req,res,next)
    const user:UserType = await USER_MODEL.findById(payload._id)
    if(!user) return next({status:400,error:'unauthorised user'})

    const _id = req.params.note_id
    const {title, content, bg} = req.body

    const {matchedCount} = await USER_MODEL.updateOne(
        {_id:payload._id,'notes._id':_id},
        {$set:{
            'notes.$.title':title && title,
            'notes.$.content':content && content,
            'notes.$.bg':bg && bg
        }}
    )
    if(!matchedCount) return next({status:404, error:'note not found'})
    return res.send({success : true})

})