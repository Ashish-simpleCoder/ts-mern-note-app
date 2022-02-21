import { memo, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Wrapper from "../../Components/HigherComponents/Wrapper";
import Button from "../../Components/PureComponents/Button";
import Caption from "../../Components/PureComponents/Caption";
import H2 from "../../Components/PureComponents/H2";


const HeroRight = memo(()=>{
    const history = useHistory()
    const handleClick = useCallback(() => history.push('/notes'),[history])
    return(
        <Wrapper mode='hero'>
            <H2 styles={{"--order":0}}>
                An Amazing <span className="accent">Note</span> App
            </H2>
            <Caption text={'Create your notes on the go, that you can easily remember.'} styles={{"--order":1}}/>
            <Button text='Get Started'  handleClick={handleClick} mode='hero_btn' styles={{"--order":2}}/>
        </Wrapper>
    )
})
export default HeroRight