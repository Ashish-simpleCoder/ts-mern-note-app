import { memo } from "react";
import { useHistory } from "react-router-dom";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import Button from "../../Components/PureComponents/Button";
import Caption from "../../Components/PureComponents/Caption";
import H2 from "../../Components/PureComponents/H2";

const HeroRight = memo(()=>{
    const history = useHistory()
    const handleClick = () => history.push('/notes')
    return(
        <Wrapper mode='hero'>
            <H2 text='An Amazing Note App'/>
            <Caption text={'Create your notes on the go, that you can easily remember.'}/>
            <Button text='Get Started'  handleClick={handleClick} mode='hero_btn'/>
        </Wrapper>
    )
})
export default HeroRight