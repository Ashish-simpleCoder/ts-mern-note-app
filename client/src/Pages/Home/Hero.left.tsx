import { memo } from "react";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import Img from "../../Components/PureComponents/Img";

const HeroLeft = memo(()=>{
    return(
        <Wrapper>
            <Img src="./imgs/hero_notes.png" alt="hero banner" cls='invert-3' animate={true}/>
        </Wrapper>
    )
})
export default HeroLeft