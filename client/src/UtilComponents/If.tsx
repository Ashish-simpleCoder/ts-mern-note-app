import { ReactNode } from "react"

const If = ( {condition, children} : {condition:boolean, children:ReactNode} ) =>{
    if(!!condition){
        return <>{children}</>
    }
    return null
}
export default If