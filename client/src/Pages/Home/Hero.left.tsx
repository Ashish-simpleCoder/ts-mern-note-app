import { memo } from "react";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import HeroBg from "../../svg/Hero.bg";

const HeroLeft = memo(()=>{
    return(
        <Wrapper mode="hero">
            <HeroBg/>
        </Wrapper>
    )
})
export default HeroLeft