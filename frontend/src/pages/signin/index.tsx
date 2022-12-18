import BackgroundImg from '../../assets/img-cafe.jpg'
import { singInRequest } from '../../redux/action/userAction'

import { Link } from 'react-router-dom'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import React, { useState } from 'react'
import axios from 'axios'

import './style.css'

function Signin() {

    const dispatch = useDispatch()

    const [ spanis, spanState ]: any = useState(null)

    const [ isEmail, emailState ] = useState("")
    const [ isPassword, passwordState ] = useState("")

    async function LoginUser(e: any) {
        e.preventDefault()

        if(!isEmail.trim() || !isPassword.trim()) {
            spanState(false)
            return toast.error("Nenhum campo pode estar vazio!")
        }

        const resultSignUp = await axios.post('http://localhost:3336/searchuser', {
            email: isEmail,
            password: isPassword
        })

        dispatch(singInRequest(resultSignUp))

        if(resultSignUp.status == 200) {
            spanState(null)
            window.open("/", "_self")
        } else if(resultSignUp.status == 201) {
            spanState(false)
            toast.error("Verifique as informações colocadas!!")
        } 
    }

    return(
        <div className='signin_container'>
            <form action="">
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <div className='input_mail'>
                    <FiMail />
                    <input type="email" placeholder='E-mail' onChange={(e)=>{emailState(e.target.value)}}/>
                </div>

                <div className='input_password'>
                    <FiLock />
                    <input type="password" placeholder='Senha' onChange={(e)=>{passwordState(e.target.value)}}/>
                </div>

                <button onClick={(e)=>{LoginUser(e)}}>Entrar</button>


                <Link to="/signup" target={'_self'}>Criar Conta</Link>

            </form>

            <img src={BackgroundImg} alt="" />
        </div>
    )
}

export default Signin