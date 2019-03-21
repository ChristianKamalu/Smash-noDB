import React, { Component } from 'react';
import ViewToggle from './ViewToggle'
import axios from 'axios'

class Smash extends Component {
    constructor () {
        super();

        this.state = {
            characters: [],
            specificChar: {
                debut: 1981,
                id: 2,
                image_path: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/MarioNSMBUDeluxe.png/220px-MarioNSMBUDeluxe.png",
                moves: ["Super Jump Punch","Fireball","Mario Tornado","Cape"],
                name: "Mario",
                tier: 'E',
                universe: "Mario",
                weight: 100
              },
            toggle: false
        }
    }

    
    handleCharacterClick = (id) => {
        let character = this.state.characters.find(character => character.id === id)
        
        this.setState({
            specificChar: character
        })
    }
    
    toggleView = (id) => {        
        this.state.toggle ? this.setState({
            toggle: false
        }) : this.setState({
            toggle: true
        });

        this.handleCharacterClick(id)
    }

    componentDidMount() {
        axios.get('/api/SmashChars')
            .then(res=> {
                this.setState({
                    characters: res.data
                })
            })
    }

    render() {
        return (
            <div className={'background'}>
                <ViewToggle 
                    characters={this.state.characters}
                    specificChar={this.state.specificChar}
                    toggleView={this.toggleView}
                    toggle={this.state.toggle}
                />
            </div>
        )
    }
}

export default Smash