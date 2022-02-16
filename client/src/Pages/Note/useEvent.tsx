import { useEffect, useRef } from "react"


const useEventListener = ({eventType, handler, element}:{eventType:any, handler:any, element?:any}) =>{
    const hanlderRef = useRef(handler)

    useEffect(()=>{
        hanlderRef.current = handler
    },[handler])

    useEffect(()=>{
        const eventListener = (e:any) => e.key === 'Escape' && hanlderRef.current()
        element?.addEventListener(eventType, eventListener)
        return () => {
            element?.removeEventListener(eventType, eventListener)
        }
    }, [eventType, element])
}
export default useEventListener