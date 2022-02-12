import { useEffect, useRef } from "react"

const useClickListener = ({eventType, handler, element = window}:{eventType:any, handler:any, element?:any}) =>{
    const handleRef = useRef(handler)

    useEffect(()=>{
        handleRef.current = handler
    }, [handler])

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