import React, { Component } from 'react';
import ViewToggle from './ViewToggle'

class Smash extends Component {
    constructor () {
        super();

        this.state = {
            characters: [],
            specificCharacter: [],
            toggle: true
        }
    }

    render() {
        return (
            <div>
                <ViewToggle 
                    characters={this.state.characters}
                    specificCharacter={this.state.specificCharacter}
                    toggle={this.state.toggle} 
                />
            </div>
        )
    }
}

export default Smash