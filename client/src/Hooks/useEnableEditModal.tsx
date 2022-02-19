import { useCallback, useEffect, useRef } from "react"

const useEnableEditModal = ({_id}:{_id:string}) => {
    const ref_id = useRef(_id)
    useEffect(()=>{
        ref_id.current = _id
    }, [_id])

    const enableEditModal = useCallback((_id:string) =>{
        if(_id){
            const modal = document.getElementById('modal') as HTMLDivElement
            const p = modal.parentElement as any
            const element = document.getElementById(_id) as HTMLDivElement
            const {top, left, width, height} = element.getBoundingClientRect()
            modal.style.top = top+'px'
            modal.style.left = left+'px'
            modal.style.width = width+'px'
            modal.style.height = height+'px'
            p.style.display='flex'
            modal.style.display='flex'
            setTimeout(()=> document.body.classList.add('edit_mode'),20)
        }
    }, [ref_id])

    useEffect(()=>{
        //when the id changes then if it has value then enable editModal
        enableEditModal(ref_id.current)
    },[_id])

    return {enableEditModal}
}
export default useEnableEditModal