import React from 'react'
import { useState } from 'react'
import { isPropertySignature } from 'typescript'
import './style.css'

interface AppProps {
    title: string
    activity: boolean
}

function buttonText(props: AppProps) {

    return (
        <button className='button_container' style={{"color": `${props.activity == true ? "orange": "gray"}`}}>
            {props.title}
        </button>
    )
}

export default buttonText