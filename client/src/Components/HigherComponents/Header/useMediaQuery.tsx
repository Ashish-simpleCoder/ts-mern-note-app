import { useEffect, useRef, useState, useCallback } from "react"

const useMediaQuery = () =>{
    const [show, setShow] = useState(()=>window.innerWidth < 700)
    const [show_nav, setShowNav] = useState(()=>window.innerWidth > 700)

    // making the immutable function for so after cleanup events can be removed from dom
    const handlerRef = useRef(()=>{
        setShow(window.innerWidth < 700)
        setShowNav(window.innerWidth > 700)
    })

    const enableResNav = useCallback(()=>setShowNav(v=>!v), [])

    // add event to body when it starts to resize
    useEffect(()=>{
        window.addEventListener('resize', handlerRef.current)
    }, [])

    // adding event to the Overlay for closing the opened nav
    useEffect(()=>{
        const overlay = document.querySelector('.overlay') as HTMLDivElement
        overlay.classList.toggle('show_overlay', show_nav && show)
        if(show_nav && show){
            overlay.addEventListener('click',enableResNav)
        }
        return () =>overlay.removeEventListener('click', enableResNav)
    }, [show_nav, show])

    return {show, enableResNav, show_nav}
}
export default useMediaQuery