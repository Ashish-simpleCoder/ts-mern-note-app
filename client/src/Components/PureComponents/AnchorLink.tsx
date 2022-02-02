import { memo } from "react";
import { Link } from "react-router-dom";

const AnchorLink = memo(({text, path}:{text:string, path:string})=>{
    return <Link to={path}>{text}</Link>
})
export default AnchorLink