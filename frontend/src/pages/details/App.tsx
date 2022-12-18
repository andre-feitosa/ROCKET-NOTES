import './style.css'

import Header from '../../components/header';
import Section from '../../components/section';
import ButtonText from '../../components/buttontext';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { marksInRequest } from '../../redux/action/marksAction';

function App() {
  const selectorMarks = useSelector(marksInRequest)
  const infoUser = selectorMarks.payload.user.data

  let { title } = useParams();

  const [ myNotes, noteState ] = useState({0:{titulo:"", observacao:"", 
    links: [], marcadores: []
  }})

    async function loadingNotes() {
      const searchUser = await axios.post("http://localhost:3336/notesone", {
          email: infoUser.email,
          titulo: title
      })
  
      noteState(searchUser.data)
    }
  
    loadingNotes()

    function ChildrenLinks() {
      return (
        <div className='childrenli_container'>
          {
            myNotes[0].links.map((obj: any)=>{
              return (
                <li>
                  <a href={obj}>{obj}</a>
                </li>
              )
            })
          }
        </div>
      )
    }
    
    function ChildrenMarcadores() {
      return (
        <div className='childrenmc_container'>
          {
            myNotes[0].marcadores.map((obj: any)=>{

              return (
                <li style={{"margin": "8px 10px 0 0"}}>
                  {obj}
                </li>
              )
            })
          }
        </div>
      )
    }

    async function deleteNotes() {
      await axios.post("http://localhost:3336/notesdelete", {
          email: infoUser.email,
          titulo: title
      })

      window.open("http://localhost:3000/", "_self")
    }
    
  return (
    <div className="App">
      <Header/>
      <main>
        <button onClick={()=>{deleteNotes()}}>
          Excluir nota
        </button>
        <h1>{myNotes[0].titulo}</h1>
        <p>
          {myNotes[0].observacao}
        </p>        
        <div className="sections">
          <Section title={'Links uteis'} children={<ChildrenLinks/>}/>
          <Section title={'Marcadores'} children={<ChildrenMarcadores/>} />
        </div>
          <Link to={'/'} className="linkContainer">
            Voltar
          </Link>
      </main>
    </div>
  );
}

export default App;
