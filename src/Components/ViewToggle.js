import React from 'react'
import AllChar from './AllChar'
import SpecificChar from './SpecificChar'

function Toggle (props) {
    return props.toggle ? 
        <AllChar 
            componentDidMount={props.componentDidMount}
            createCharacter={props.createCharacter}
            specificChar={props.specificChar}
            characters={props.characters}
            toggleView={props.toggleView}
            /> : 
        <SpecificChar 
            deleteCharacter={props.deleteCharacter}
            specificChar={props.specificChar}
            updateCharacter={props.updateCharacter}
            toggleView={props.toggleView}/>
}

export default Toggle