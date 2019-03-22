import React, { Component } from 'react';
import ViewToggle from './ViewToggle'
import axios from 'axios'

class Smash extends Component {
    constructor () {
        super();

        this.state = {
            characters: [],
            specificChar: [],
            toggle: true
        }
    }

    deleteCharacter = id => {
        axios.delete(`/api/SmashChars/${id}`)
            .then(res => {
                this.setState({
                    characters: res.data
                })
            }).catch(err => console.log(err))
    }

    searchCharacters = (input) => {
        axios.get(`/api/SmashChars/${input}`)
            .then(res => {
                this.setState({
                    characters: res.data
                })
            }).catch(err => console.log(err))
    }

    createCharacter = character => {
        axios.post('/api/SmashChars', character)
            .then(res => {
                this.setState({
                    characters: res.data
                })
            }).catch(err => console.log(err))
    }

    updateCharacter = character => {
        axios.put(`/api/SmashChars/${character.id}`, character).then(res => {
            this.setState({
                characters: res.data
            })
            // this.toggleView(res.data.id);
        }).catch(err => console.log(err))
    }
    
    handleCharacterClick = (id) => {
        let specific = this.state.characters.find(character => character.id === id)
        let character = Object.assign({}, specific)
        this.setState({
            specificChar: character
        })
    }
    
    toggleView = (id) => {        
        this.state.toggle ? this.setState({
            toggle: false,
            edit: false
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
            .catch(err => {
                console.log("Houston, we have a proplem", err)
            })
    }

    render() {
        return(
            <div className={'background'}>
                <ViewToggle 
                    componentDidMount={this.componentDidMount}
                    deleteCharacter={this.deleteCharacter}
                    createCharacter={this.createCharacter}
                    characters={this.state.characters}
                    specificChar={this.state.specificChar}
                    updateCharacter={this.updateCharacter}
                    toggleView={this.toggleView}
                    toggle={this.state.toggle}
                />
            </div>
        )
    }
}

export default Smash