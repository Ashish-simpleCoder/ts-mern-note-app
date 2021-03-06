import { memo, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { CSSProperties } from "styled-components";

type AnchorProps = {text?:string, path:string, styles?:CSSProperties, children?:ReactNode}

const AnchorLink = memo(({text, path, styles, children} : AnchorProps)=>{
    return <NavLink to={path} style={styles} activeClassName="active_link" exact>
        {text && text}
        {children && children}
    </NavLink>
})
export default AnchorLink

