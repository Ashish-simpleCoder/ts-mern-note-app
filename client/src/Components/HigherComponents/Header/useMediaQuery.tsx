import { useEffect, useRef, useState, useCallback } from "react"
import Overlay from "../../PureComponents/Overlay"

const useMediaQuery = () =>{
    const [isHamVisible, setIsHamVisible] = useState(()=>window.innerWidth < 700) //for hamburger
    const [isDeskNavVisible, setIsDeskNavVisible] = useState(()=>window.innerWidth > 700) //for showing the desktop nav


    // making the immutable function for so after cleanup events can be removed from dom
    const handlerRef = useRef(()=>{
        setIsHamVisible(window.innerWidth < 700)
        setIsDeskNavVisible(window.innerWidth > 700)
    })

    const enableResNav = useCallback(()=>setIsDeskNavVisible(v=>!v), [])
    const hiderResNav = useCallback(() => setIsDeskNavVisible(false), [])

    // adding resize event to body when it starts to resize for setting the nav and desktop nav visibility
    useEffect(()=>{
        const eventListener = () => handlerRef.current()
        window.addEventListener('resize', eventListener)
        return () => window.removeEventListener('resize', eventListener)
    }, [])


    // adding event to the nav_overlay for closing the opened nav
    useEffect(()=>{
        const overlay = document.querySelector('.nav_overlay') as HTMLDivElement
        overlay.classList.toggle('show_nav_overlay', isDeskNavVisible && isHamVisible)
        if(isDeskNavVisible && isHamVisible){
            overlay.addEventListener('click',hiderResNav)
        }
        return () => overlay.removeEventListener('click', hiderResNav)
    }, [isDeskNavVisible, isHamVisible, hiderResNav])



    return {isHamVisible, enableResNav, isDeskNavVisible, Overlay}
}
export default useMediaQuery