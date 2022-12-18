import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import axios from 'axios';

import Header from '../../components/header';
import ButtonText from '../../components/buttontext';
import Note from '../../components/note'
import { marksInRequest } from '../../redux/action/marksAction'

import './style.css'

const Home = () => {
    const selectorMarks = useSelector(marksInRequest)
    const infoUser = selectorMarks.payload.user.data

    const [ myNotes, noteState ] = useState([{titulo:"", observacao:"", 
        links: [], marcadores: [], length: ""
    }])

    async function loadingNotes() {
        const searchUser = await axios.post("http://localhost:3336/searchnotes", {
            email: infoUser.email
        })

        noteState(searchUser.data)
    }

    loadingNotes()
    return(
        <div className='home_container'>
            <div className='brand_container'>
                <h1>Rocketnotes</h1>
            </div>

            <div className='head_container'>
                <Header />
            </div>

            <div className='menu_container'>
            <li><ButtonText title="Todos" activity/></li>
            <li><ButtonText title="Node" activity/></li>
            <li><ButtonText title="React" activity/></li>  

                <Link className='newnote' to='/newpost'>
                    <FiPlus />
                    <span>Criar nota!</span>
                </Link>
            </div>

            <div className='search_container'>
                <div className='search_input'>
                    <input type="text" placeholder='Pesquisar pelo título'  onKeyDown={(ev: any)=>{ev.code == "Enter" ? window.open(`http://localhost:3000/details/${ev.target.value}`, "_self") : console.log("a")}}/>
                </div>
            </div>

            <div className='content_container'>
                {
                    myNotes.map((obj: any)=>{

                        return (
                        <>
                            <Note title={obj.titulo} tags={[obj.marcadores]}/>
                        </>
                        )
                    }) 
                }
            </div>

        </div>
    )
}

export default Home