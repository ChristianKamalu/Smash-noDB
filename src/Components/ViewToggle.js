import React from 'react'
import AllChar from './AllChar'
import SpecificChar from './SpecificChar'

function Toggle (props) {
    return props.toggle ? 
        <AllChar 
            characters={props.characters}
            toggleView={props.toggleView}
            /> : 
        <SpecificChar 
            specificChar={props.specificChar}
            toggleView={props.toggleView}/>
}

export default Toggle