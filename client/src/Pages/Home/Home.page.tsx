import { memo } from "react";
import HeroSection from "./Hero.section";
import useFetchUser from "../../Hooks/useFetchUser";


const HomePage = memo(()=>{
    useFetchUser({auth : false})   //fetching the logged user

    return  <HeroSection/>
})
export default HomePage