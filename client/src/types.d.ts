import { Dispatch, SetStateAction } from "react";

interface img_props{
    src:string
    alt:string
    title?:string
    styles?:{}
}

interface UserCtxInterface{
    user:UserInterface,
    setUser:Dispatch<SetStateAction<UserInterface>>
}

interface UserInterface{
    _id:string,
    email:string,
    notes?:NoteInterface[]
}

interface NoteInterface{
    title:string,
    content:string,
    _id:string,
    bg:Record<string>[]
}
