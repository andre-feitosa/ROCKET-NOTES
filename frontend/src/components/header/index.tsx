import './style.css'
import { marksInRequest } from '../../redux/action/marksAction'
import { singOut } from '../../redux/action/userAction'

import { useDispatch, useSelector } from 'react-redux'
import { RiShutDownLine } from 'react-icons/ri'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const selectorMarks = useSelector(marksInRequest)
    const dispatch = useDispatch()

    const infoUser = selectorMarks.payload.user.data

    return (
        <div className='header_container'>
            <div className='profile_container'>
                <img src="https://placekitten.com/300/300" alt="" />
                <div className='profile'>
                    <span>Bem vindo,</span>
                    <strong>{infoUser.nome}</strong>
                </div>
            </div>
            <div className='logout_container' onClick={()=>{dispatch(singOut())}}>
                <RiShutDownLine />
            </div>
        </div>
    )
}

export default Header