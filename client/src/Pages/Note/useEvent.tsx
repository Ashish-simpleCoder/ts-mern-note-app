import { useEffect, useRef } from "react"


const useEventListener = ({eventType, handler, element}:{eventType:any, handler:any, element?:any}) =>{
    const hanlderRef = useRef(handler)

    useEffect(()=>{
        hanlderRef.current = handler
    },[handler])

    useEffect(()=>{
        const eventListener = (e:any) => e.key === 'Escape' && hanlderRef.current()
        element?.addEventListener(eventType, (e:any) => eventListener(e))
        return () => {
            document.removeEventListener(eventType, eventListener)
        }
    }, [eventType])
}
export default useEventListener