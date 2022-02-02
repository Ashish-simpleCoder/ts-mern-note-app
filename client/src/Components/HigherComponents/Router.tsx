import { lazy, memo, Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { UserProvider } from "../../Context/UserContext";
import Header from "./Header/Header";

const LoginPage = lazy(()=>import('../../Pages/Login/Login.page'))
const RegisterPage = lazy(()=>import('../../Pages/Register/Register.page'))



const CustomRouter = memo(()=>{
    return(
        <UserProvider>
        <HashRouter>
            <Header/>
            <main>
            <Switch>
                <Route path='/login'><Suspense fallback={<h3>loading....</h3>}><LoginPage/></Suspense></Route>
                <Route path='/register'><Suspense fallback={<h3>loading....</h3>}><RegisterPage/></Suspense></Route>
            </Switch>
            </main>
        </HashRouter>
        </UserProvider>
    )
})
export default CustomRouter