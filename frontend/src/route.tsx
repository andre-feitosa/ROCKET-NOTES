import { Route , Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { marksInRequest } from './redux/action/marksAction'
import React from 'react'

interface PrivateProps {
    children: any,
    redirect: any
}

export function RouteNotLogin({children, redirect}: PrivateProps) {
    const selector = useSelector(marksInRequest)

    return selector.payload.user ? children : <Navigate to={redirect}/>
}

export function RouteLogin({children, redirect}: PrivateProps) {
    const selector = useSelector(marksInRequest)

    return !selector.payload.user ? children : <Navigate to={redirect}/>
}
