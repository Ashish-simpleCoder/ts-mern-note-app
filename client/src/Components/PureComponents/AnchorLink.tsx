import { memo, ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { CSSProperties } from "styled-components";

const AnchorLink = memo(({text, path, styles, children}:{text?:string, path:string, styles?:CSSProperties, children?:ReactNode})=>{
    return <NavLink to={path} style={styles} activeClassName="active_link">
        {text && text}
        {children && children}
    </NavLink>
})
export default AnchorLink

