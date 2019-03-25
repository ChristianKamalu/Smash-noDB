import React from 'react'
import './style.css'

function Char (props) {
    return(
        <div className={'character-container'}  onClick={() => props.toggleView(props.character.id)}>
            <img src={props.character.image_path} alt={props.character.name} width='300'/>
            <h1>{props.character.name}</h1>
        </div>
    )
}

export default Char