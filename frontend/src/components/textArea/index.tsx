import React from 'react'
import './style.css'

interface AppProps {
    value: any
}

export default function TextArea(props: AppProps) {
    return(
        <textarea placeholder={props.value} className='textarea_container'></textarea>
    )
}