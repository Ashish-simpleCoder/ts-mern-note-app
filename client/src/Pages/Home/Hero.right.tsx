import { memo } from "react";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import Caption from "../../Components/PureComponents/Caption";
import H2 from "../../Components/PureComponents/H2";

const HeroRight = memo(()=>{
    return(
        <Wrapper>
            <H2 text='An Amazing Note App'/>
            <Caption text={'Create your notes on the go, that you can easily remember.'}/>
        </Wrapper>
    )
})
export default HeroRight