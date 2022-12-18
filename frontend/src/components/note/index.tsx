import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

interface AppProps {
    title: string
    tags: any
}

function Note(props: AppProps) {

    return(
        <div className='note_container'>
            <Link to={`/details/${props.title}`}>
                <h1>{props.title}</h1>
            </Link>
            <div className='node_note'>
            {
                props.tags[0].map((obj: any)=>{
                    return <li>
                        {obj}
                    </li>
                })
            }
            </div>
        </div>
    )
}

export default Note