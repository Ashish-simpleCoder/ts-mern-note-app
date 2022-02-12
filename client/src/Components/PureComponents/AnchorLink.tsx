import { memo, ReactNode } from "react";
import { Link } from "react-router-dom";
import { CSSProperties } from "styled-components";

const AnchorLink = memo(({text, path, styles, children}:{text?:string, path:string, styles?:CSSProperties, children?:ReactNode})=>{
    return <Link to={path} style={styles}>
        {text && text}
        {children && children}
    </Link>
})
export default AnchorLink

