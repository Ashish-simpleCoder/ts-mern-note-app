import { lazy, memo, Suspense } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { UserProvider } from "../../Context/UserContext";
import H1 from "../PureComponents/H1";
import Header from "./Header/Header";

const HomePage = lazy(()=>import('../../Pages/Home/Home.page' /* webpackChunkName: 'homepage' */))
const LoginPage = lazy(()=>import('../../Pages/Login/Login.page' /* webpackChunkName: 'loginpage' */))
const RegisterPage = lazy(()=>import('../../Pages/Register/Register.page' /* webpackChunkName: 'registerpage' */))
const NotePage = lazy(()=>import('../../Pages/Note/Note.page' /* webpackChunkName: 'notepage' */))
const NotFoundPage = lazy(()=>import('../../Pages/NotFound/NotFound.page' /* webpackChunkName: 'notefoundpage' */))



const CustomRouter = memo(()=>{
    return(
        <UserProvider>
        <HashRouter>
            <Header/>
            <main>
            <Switch>
                <Route path='/' exact><Suspense fallback={<H1 heading="loading...." />}><HomePage/></Suspense></Route>
                <Route path='/login' exact><Suspense fallback={<H1 heading="loading...." />}><LoginPage/></Suspense></Route>
                <Route path='/register' exact><Suspense fallback={<H1 heading="loading...." />}><RegisterPage/></Suspense></Route>
                <Route path='/notes' exact><Suspense fallback={<H1 heading="loading...." />}><NotePage/></Suspense></Route>
                <Route path='*' exact><Suspense fallback={<H1 heading="loading...." />}><NotFoundPage/></Suspense></Route>
            </Switch>
            </main>
        </HashRouter>
        </UserProvider>
    )
})
export default CustomRouter