import {memo} from 'react'


const RandomSpan = memo(({cls}:{cls?:string})=>{
    const background = `#${Math.random().toString(16).slice(2,8)}`
    return(
        <span className={cls} style={{background}}></span>
    )
})
export default RandomSpan