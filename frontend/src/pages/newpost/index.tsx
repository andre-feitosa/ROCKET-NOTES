import './style.css'
import '../../components/textArea/style.css'
import Header from '../../components/header';
import NoteItem from '../../components/noteItem';
import { marksInRequest } from '../../redux/action/marksAction'

import { Link } from 'react-router-dom';
import axios from 'axios'
import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

export default function Newpost() {
    const [ isObservacao, obsState ] = useState("")
    const [ isTitle, titleState ] = useState("")
    
    const selectorMarks = useSelector(marksInRequest)

    const arrayShopLink: any[] = []
    const arrayShopMarks: any = []

    const arrayLink = selectorMarks.payload.marks[0]
    const arrayMarks = selectorMarks.payload.marks[1]

    if(arrayLink !== undefined) {
        for(let i=0; i < arrayLink.length; i++){
            arrayShopLink.push(arrayLink[i].value)
        }
    
        for(let i=0; i < arrayMarks.length; i++){
            arrayShopMarks.push(arrayMarks[i].value)
        }
    }

    async function createNote() {

        if(!isTitle.trim()) {
            return toast.error("O titulo não pode estar vazio!")
        }

        const resultSignUp = await axios.post('http://localhost:3336/createnotes', {
            email: selectorMarks.payload.user.data.email,
            titulo: isTitle,
            observacao: isObservacao,
            links: arrayShopMarks,
            marcadores: arrayShopLink
        })

        if(resultSignUp.status == 201) {
            toast.error("Verifique se esse titulo ja esta sendo usado!")
        } if(resultSignUp.status == 200) {
            toast.success("A nota foi criada!")
        }
    }

    return(
        <div className='newpost_container'>
            <Header />

            <main>
                <div className='newform_container'>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <input type="text" placeholder='Título'onChange={(e)=>{titleState(e.target.value)}}/>

                    <textarea placeholder="Observações" className='textarea_container' onChange={(e)=>{obsState(e.target.value)}}></textarea>

                    <NoteItem />

                    <button className='saveButton' onClick={()=>createNote()}>Salvar</button>
                </div>
            </main>
        </div>
    )
}