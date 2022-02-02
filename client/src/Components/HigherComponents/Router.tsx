import { memo } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";

const CustomRouter = memo(()=>{
    return(
        <HashRouter>
            <Header/>
            <main>
            <Switch>
                <Route path='/login'></Route>
                <Route path='/register'></Route>
            </Switch>
            </main>
        </HashRouter>
    )
})
export default CustomRouter