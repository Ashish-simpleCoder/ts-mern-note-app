import { memo } from "react";
import LeftRightWrapper from "../../Components/HigherComponents/LeftRightWrapper";
import HeroLeft from "./Hero.left";
import HeroRight from "./Hero.right";

const HeroSection = memo(()=>{
    return(
        <LeftRightWrapper styles={{minHeight:'calc(100vh - 6rem)'}} before_obj={true}>
            <HeroLeft/>
            <HeroRight/>
        </LeftRightWrapper>
    )
})
export default HeroSection
