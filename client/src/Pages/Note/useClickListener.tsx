import { useEffect } from "react"

const useClickListener = ({eventType, handler}:{eventType:any, handler:any}) =>{
    useEffect(()=>{
        document.querySelector('.edit_modal_wrapper')?.addEventListener(eventType, handler)
        return () => {
            document.querySelector('.edit_modal_wrapper')?.removeEventListener(eventType, handler)
        }
    }, [eventType])
}
export default useClickListener