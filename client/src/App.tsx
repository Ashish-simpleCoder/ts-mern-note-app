import "./styles/styles.css"
import {memo} from 'react'
import CustomRouter from "./Components/HigherComponents/Router"


const App = memo(()=>{
    return(
        <>
            <CustomRouter />
        </>
    )
})
export default App