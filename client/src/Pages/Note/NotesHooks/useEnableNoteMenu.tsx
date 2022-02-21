import { MouseEvent, useCallback, useEffect, useState, useRef, KeyboardEvent } from 'react'
import { NoteInterface } from '../../../types'


const useEnableMenu = ({element, element2=window, handler, eventType, eventType2 = 'keyup'} : HookProps) =>{

    const [menu, setMenu] = useState<MenuState>({
        enable:false,
        item:{ title:'',content:'',bg:[],_id:'' },
        position:{ top : '', left: '' }
    })


    const setMenuDetails = useCallback((e:MouseEvent<HTMLDivElement, MouseEvent>, item:NoteInterface)=>{
        const {top, left} = e.currentTarget.getBoundingClientRect()
        setMenu(({enable:true, position:{top:top+20+'px', left:left+20+'px'}, item}))
        element.classList.add('show_overlay')
    },[element])

    const handleRef = useRef(handler)
    useEffect(()=>{
        handleRef.current = handler
    }, [handler])


    useEffect(()=>{
        const eventListener = (e:any) => {
                if(e.target.classList.contains('overlay')){
                    handleRef.current()
                    element.classList.remove('show_overlay')
                }
        }
        const eventListener2 = (e:KeyboardEvent) => {
                if(e.key === 'Escape'){
                    handleRef.current()
                    element.classList.remove('show_overlay')
                }
        }
        // menu.enable && addEventListener()  old code
        menu.enable && element?.addEventListener(eventType, eventListener, false)
        menu.enable && element2?.addEventListener(eventType2, eventListener2, false)
        !menu.enable && element?.removeEventListener(eventType, eventListener, false)
        !menu.enable && element2?.removeEventListener(eventType2, eventListener2, false)
        return () => {
            element?.removeEventListener(eventType, eventListener, false)
            element2?.removeEventListener(eventType2, eventListener2, false)
        }
    }, [eventType, menu.enable, element, element2, eventType2])

    return {setMenu, menu, setMenuDetails}
}
export default useEnableMenu


type HookProps = {
    element:any, element2?:any, handler:any, eventType:string, eventType2?:string
}
type MenuState = {
    enable:boolean, item:NoteInterface, position:{top:string, left:string}
}