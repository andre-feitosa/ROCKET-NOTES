import App from './pages/details/App'
import Home from './pages/home/home'
import NotFound from './pages/error'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Newpost from './pages/newpost'
import {RouteNotLogin, RouteLogin} from './route'
import { marksInRequest } from './redux/action/marksAction'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useSelector } from 'react-redux'
import React from 'react'

export function Rotas() {

    const selectorMarks = useSelector(marksInRequest)

    console.log(selectorMarks.payload.user)

    return (
        <>
            <Router>
                <Routes> 
                    <Route path='/signin' element={<RouteLogin redirect={"/"}><Signin /></RouteLogin>}/>
                    <Route path='/signup' element={<RouteLogin redirect={"/"}><Signup /></RouteLogin>}/>
                    <Route path='/' element={<RouteNotLogin redirect={'/signin'}><Home/></RouteNotLogin>}/>
                    <Route path='/details/:title' element={<RouteNotLogin redirect={'/signin'}><App/></RouteNotLogin>}/>
                    <Route path='/newpost' element={<RouteNotLogin redirect={'/signin'}><Newpost/></RouteNotLogin>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Router>
        </>
    )
}