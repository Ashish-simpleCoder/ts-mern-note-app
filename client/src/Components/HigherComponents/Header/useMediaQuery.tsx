import { useEffect, useRef, useState, useCallback } from "react"
import Overlay from "../../PureComponents/Overlay"

const useMediaQuery = () =>{
    const [show, setShow] = useState(()=>window.innerWidth < 700) //for hamburger
    const [show_nav, setShowNav] = useState(()=>window.innerWidth > 700) //for showing the desktop nav

    // making the immutable function for so after cleanup events can be removed from dom
    const handlerRef = useRef(()=>{
        setShow(window.innerWidth < 700)
        setShowNav(window.innerWidth > 700)
    })

    const enableResNav = useCallback(()=>setShowNav(v=>!v), [])

    // add event to body when it starts to resize
    useEffect(()=>{
        const eventListener = () => handlerRef.current()
        window.addEventListener('resize', eventListener)
        return () => window.removeEventListener('resize', eventListener)
    }, [])

    // adding event to the Overlay for closing the opened nav
    useEffect(()=>{
        const overlay = document.querySelector('.overlay') as HTMLDivElement
        overlay.classList.toggle('show_overlay', show_nav && show)
        if(show_nav && show){
            overlay.addEventListener('click',enableResNav)
        }
        return () =>overlay.removeEventListener('click', enableResNav)
    }, [show_nav, show, enableResNav])

    return {show, enableResNav, show_nav, Overlay}
}
export default useMediaQuery