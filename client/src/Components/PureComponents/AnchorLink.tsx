import { memo } from "react";
import { Link } from "react-router-dom";

const AnchorLink = memo(({text, path}:{text:string, path:string})=>{
    return <Link to={path} style={{fontSize:'clamp(1.6rem,1.8rem ,1.8vw)'}}>{text}</Link>
})
export default AnchorLink
