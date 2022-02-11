import { useEffect } from "react"

const useEventListener = ({eventType, handler}:{eventType:any, handler:any}) =>{
    useEffect(()=>{
        document.addEventListener(eventType, (e) => {
            if(e.key === 'Escape'){
                handler()
            }
        })
        return () => {
            document.removeEventListener(eventType, handler)
        }
    }, [eventType, handler])
}
export default useEventListener