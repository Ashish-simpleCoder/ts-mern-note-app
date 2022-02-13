import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { CSSProperties } from "styled-components";

interface img_props{
    src:string
    alt:string
    title?:string
    styles?:CSSProperties
    handleClick?:Dispatch<any>
    cls?:string
    animate?:boolean
}

interface UserCtxInterface{
    user:UserInterface,
    setUser:Dispatch<SetStateAction<UserInterface>>
    search:string,
    setSearch:Dispatch<SetStateAction<string>>
}

interface UserInterface{
    _id:string,
    email:string,
    notes?:NoteInterface[]
}
interface ThemeCtxInterface{
    dark_theme:boolean,
    setDarkTheme: Dispatch<any>
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
    // handleDeleteNote:(note_id?: string | undefined, setLoader?:Dispatch<SetStateAction<boolean>>) => Promise<void>,
    // handleUpdateNote: () => Promise<void>
    handleDeleteNote: (_id: string, setEditNote?: Dispatch<SetStateAction<{
        title: '';
        content: '';
        _id: '';
        bg: [];
    }>> | undefined) => Promise<void>
    handleUpdateNote: (note: NoteInterface) => Promise<void>
}