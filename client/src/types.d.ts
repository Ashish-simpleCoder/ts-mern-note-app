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
    bg:Record<string>[],
    delete?:Boolean
}


interface EditNoteType{
    note:NoteInterface,
    setEditNote:Dispatch<SetStateAction<NoteInterface>>,
    handleNoteChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    menu?:MenuPosition,
    setNoteClrMenu?:React.Dispatch<React.SetStateAction<MenuPosition>>
    setNoteClrMenuPosition?:(e: MouseEvent<HTMLDivElement, MouseEvent>, item: NoteInterface) => void
}

type MenuPosition = {
    enable: boolean;
    item:NoteInterface;
    position: {
        top: string;
        left: string;
    }
}