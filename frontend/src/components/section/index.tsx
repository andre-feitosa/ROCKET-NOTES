import React from 'react'
import './style.css'

interface appProps {
    title: string,
    children: any
}

const Section = (props: appProps) => {
    return(
        <div className='section_container'>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}

export default Section