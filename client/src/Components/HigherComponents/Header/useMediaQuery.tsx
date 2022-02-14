import { useEffect, useRef, useState, useCallback } from "react"

const useMediaQuery = () =>{
    const [show, setShow] = useState(()=>window.innerWidth < 700)
    const [show_nav, setShowNav] = useState(()=>window.innerWidth > 700)
    const handlerRef = useRef(()=>{
        setShow(window.innerWidth < 700)
        setShowNav(window.innerWidth > 700)
    })
    const enableResNav = useCallback(()=>{
        setShowNav(v=>!v)
    }, [])
    useEffect(()=>{
        window.addEventListener('resize', handlerRef.current)
    }, [])
    return {show, enableResNav, show_nav}
}
export default useMediaQuery