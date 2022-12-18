import './style.css'

import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import BackgroundImg from '../../assets/img-cafe.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import React from 'react'
import { toast } from 'react-toastify'

function Signup() {

    const [ spanis, spanState ]: any = useState(null)

    const [ isName, nameState ] = useState("")
    const [ isEmail, emailState ] = useState("")
    const [ isPassword, passwordState ] = useState("")

    async function createUser(e: any) {
        e.preventDefault()

        if(!isName.trim() || !isEmail.trim() || !isPassword.trim()) {
            spanState(false)
            return toast.error("Nenhum campo pode estar vazio!")
        }

        const resultSignUp = await axios.post('http://localhost:3336/createuser', {
            nome: isName,
            email: isEmail,
            password: isPassword
        })

        if(resultSignUp.status == 200) {
            spanState(true)
            toast.success("User criado!!")
        } else if(resultSignUp.status == 201) {
            spanState(false)
            toast.error("Verifique as informações colocadas!!")
        } 
    }

    return(
        <div className='signup_container'>
            <img src={BackgroundImg} alt="" />

            <form action="" onSubmit={(e)=>{createUser(e)}}>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <div className='input_mail'>
                    <FiUser />
                    <input type="text" placeholder='Nome' onChange={(e)=>{nameState(e.target.value)}}/>
                </div>

                <div className='input_mail'>
                    <FiMail />
                    <input type="email" placeholder='E-mail' onChange={(e)=>{emailState(e.target.value)}}/>
                </div>

                <div className='input_password'>
                    <FiLock />
                    <input type="password" placeholder='Senha' onChange={(e)=>{passwordState(e.target.value)}}/>
                </div>

                <button onClick={(e)=>{createUser(e)}}>Cadastrar</button>

                <Link to="/signin" target={'_self'}>Voltar para o login</Link>

            </form>
        </div>
    )
}

export default Signup