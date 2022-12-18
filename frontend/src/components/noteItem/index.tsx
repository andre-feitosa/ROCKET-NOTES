import './style.css'

import { marksInRequest } from '../../redux/action/marksAction'

import { FiPlus, FiX } from 'react-icons/fi'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const values: any = []
const marks: any = []

export default function NoteItem() {
    const [valNote, noteState] = useState("")
    const [valMark, markState] = useState("")

    const dispatch = useDispatch()

    function NewMark(val: any) {
        marks.push({value: val})

        dispatch(marksInRequest([marks, values]))
    }

    function NewNote(val: any) {
        values.push({value: val})
    }

    return(
        <div className='newnote_container'>
            <span>Link úteis</span>
            <div className='linear_gray'></div>

            {
                values.map((obj: any, key: any)=>{

                    return(
                        <div className='tags_container'>
                            <input type="text" readOnly value={obj.value}/>
                            <FiX onClick={()=>{values.pop({value: obj.value})}}/>
                        </div>
                    )
                })
            }

            <div className='newtag_container'>
                <input type="text" onChange={(e)=>{noteState(e.target.value)}} placeholder="Novo link"/>
                <button onClick={()=>{NewNote(valNote)}}><FiPlus/></button>
            </div>

            <div className='marks_container'>
                <div>
                    <span>Marcadores</span>
                    <div className='linear_gray'></div>
                </div>

                <div className='tagsmark_container'>
                    <div className='marknew_container'>
                        {
                            marks.map((obj: any, key: any)=>{
                            return(
                                <div className='markcolons_container'>
                                    <input type="text" readOnly value={obj.value}/>
                                    <FiX onClick={()=>{values.pop({value: obj.value})}}/>
                                </div>
                                )
                            })
                        }
                    </div>
                    <div className='newmarktag_container'>
                        <input type="text" onChange={(e)=>{markState(e.target.value)}} placeholder="Novo marcador"/>
                        <button onClick={()=>{NewMark(valMark)}}><FiPlus/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
