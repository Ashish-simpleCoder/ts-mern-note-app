import { lazy, memo, Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { UserProvider } from "../../Context/UserContext";
import Header from "./Header/Header";

const HomePage = lazy(()=>import('../../Pages/Home/Home.page'))
const LoginPage = lazy(()=>import('../../Pages/Login/Login.page'))
const RegisterPage = lazy(()=>import('../../Pages/Register/Register.page'))



const CustomRouter = memo(()=>{
    return(
        <UserProvider>
        <HashRouter>
            <Header/>
            <main>
            <Switch>
                <Route path='/' exact><Suspense fallback={<h3>loading....</h3>}><HomePage/></Suspense></Route>
                <Route path='/login' exact><Suspense fallback={<h3>loading....</h3>}><LoginPage/></Suspense></Route>
                <Route path='/register' exact><Suspense fallback={<h3>loading....</h3>}><RegisterPage/></Suspense></Route>
            </Switch>
            </main>
        </HashRouter>
        </UserProvider>
    )
})
export default CustomRouter