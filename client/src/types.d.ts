import { Dispatch, SetStateAction } from "react";

interface img_props{
    src:string
    alt:string
    title?:string
    styles?:{}
    handleClick?:Dispatch<any>
    cls?:string
    animate?:boolean
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


interface EditNoteType{
    note:NoteInterface,
    setEditNote:Dispatch<SetStateAction<NoteInterface>>,
    handleEditNoteChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    handleDeleteNote:(note_id?: string | undefined) => Promise<void>,
    handleUpdateNote: () => Promise<void>
}