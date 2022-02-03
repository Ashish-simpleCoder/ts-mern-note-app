import { memo } from "react";
import LeftRightWrapper from "../../Components/HigherComponents/LeftRightWrapper";
import HeroLeft from "./Hero.left";
import HeroRight from "./Hero.right";

const HeroSection = memo(()=>{
    return(
        <LeftRightWrapper>
            <HeroLeft/>
            <HeroRight/>
        </LeftRightWrapper>
    )
})
export default HeroSection
