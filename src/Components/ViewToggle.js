import React from 'react'
import AllChar from './AllChar'
import SpecificChar from './SpecificChar'

function Toggle (props) {
    return props.toggle ? 
        <AllChar 
            searchCharacters={props.searchCharacters}
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