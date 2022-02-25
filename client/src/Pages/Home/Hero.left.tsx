import { memo } from "react";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import HeroBg from "../../svg/Hero.bg";
// import Img from "../../Components/PureComponents/Img";

const HeroLeft = memo(()=>{
    return(
        <Wrapper mode="hero">
            {/* <Img src="./imgs/hero_notes.png" alt="hero banner" cls='invert-3' animate={true}/> */}
            <HeroBg/>
        </Wrapper>
    )
})
export default HeroLeft