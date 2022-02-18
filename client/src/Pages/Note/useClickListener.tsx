import { useEffect, useRef } from "react"
import { useEditNoteCtx } from "./Note.page"

const useClickListener = ({eventType, handler, element = window}:{eventType:any, handler:any, element?:any}) =>{
    const handleRef = useRef(handler)
    const {note:edit_note} = useEditNoteCtx()

    useEffect(()=>{
        handleRef.current = handler
    }, [handler])

    // adding event to the Overlay for closing the opened nav
    // useEffect(()=>{
    //     const overlay = document.querySelector('.overlay') as HTMLDivElement
    //     overlay.classList.toggle('show_overlay', show_nav && show)
    //     if(show_nav && show){
    //         overlay.addEventListener('click',enableResNav)
    //     }
    //     return () =>overlay.removeEventListener('click', enableResNav)
    // }, [show_nav, show])

    useEffect(()=>{
        const eventListener = (e:any) => {
            if(e.target.classList.contains('edit_modal_wrapper') && document.body.classList.contains('edit_mode')){
                handleRef.current()
            }
        }
       element?.addEventListener(eventType, eventListener, false)
        return () => {
            element?.removeEventListener(eventType, eventListener, false)
        }
    }, [eventType])
}
export default useClickListener