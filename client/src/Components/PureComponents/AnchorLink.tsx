import { memo } from "react";
import { Link } from "react-router-dom";

const AnchorLink = memo(({text, path}:{text:string, path:string})=>{
    return <Link to={path} style={{fontSize:'clamp(1.6rem,1.7rem ,1.7vw)'}}>{text}</Link>
})
export default AnchorLink

