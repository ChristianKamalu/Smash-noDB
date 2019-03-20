import React from 'react'
import AllChar from './AllChar'
import SpecificChar from './SpecificChar'

function Toggle (props) {
    return props.toggle ? 
        <AllChar 
            characters={props.characters}
            toggle={props.toggle}/> : 
        <SpecificChar 
            specificChar={props.specificChar}
            toggle={props.toggle}/>
}

export default Toggle