import { memo } from "react";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import H2 from "../../Components/PureComponents/H2";

const HeroRight = memo(()=>{
    return(
        <Wrapper>
            <H2 text='An Amazing Note App'/>
        </Wrapper>
    )
})
export default HeroRight