import { useEffect, useRef } from "react"


//this is escape key event
const useEventListener = ({eventType, handler, element}: EventProps) =>{
    const hanlderRef = useRef(handler)

    useEffect(()=>{
        hanlderRef.current = handler
    },[handler])

    useEffect(()=>{
        const eventListener = (e:any) => e.key === 'Escape' && hanlderRef.current()
        element?.addEventListener(eventType, eventListener)
        return () => element?.removeEventListener(eventType, eventListener)
    }, [eventType, element])
}
export default useEventListener

type EventProps = {eventType:any, handler:any, element?:any}