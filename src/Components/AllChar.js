import React, {Component} from 'react';
import Char from './Char'

class AllChar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: null,
            image_path: null,
            universe: null,
            moves: null,
            weight: null,
            create: false
        }
    }
    
    toggleCreate = () => {
        this.state.create ? this.setState({
            create: false
        }) : this.setState({
            create: true
        });
    }

    handleChange = target => {
        let { name, value } = target
        
        this.setState({
            [name]: value
        })
    }

    handleCreateClick = () => {
        this.props.createCharacter(this.state)
        this.setState({
            id: null,
            name: null,
            image_path: null,
            universe: null,
            moves: null,
            weight: null,
            create: false
        })
    }

    render() {
        return !this.state.create ? (
            <div className={'character-view'}>
                <button className={'create-button'} onClick={this.toggleCreate}><h3>CREATE CHARACTER</h3></button>
                <input className={'search-bar'} placeholder={'SEARCH'} onChange={e => this.props.searchCharacters(e.target.value)}/>
                <img className={'All-Characters-Header'} src={'https://fontmeme.com/permalink/190322/5e0c3ba9f725e06348fec118fab97f4c.png'} alt='header'/>
                <div className={'character-view'}>
                    {this.props.characters.map((character) => {
                        return <Char key={character.id} character={character} toggleView={this.props.toggleView}/>
                    })}
                </div>
                <div className={'background'}></div>
            </div>
        ) : (
            <div className={'character-view'}>
                <button className={'create-button'} onClick={this.toggleCreate}><h3>CREATE CHARACTER</h3></button>
                <img className={'All-Characters-Header'} src={'https://fontmeme.com/permalink/190322/5e0c3ba9f725e06348fec118fab97f4c.png'} alt='header'/>
                <div className={'character-view'}>
                    {this.props.characters.map((character) => {
                        return <Char key={character.id} character={character} toggleView={this.props.toggleView}/>
                    })}
                </div>
                <div className={'create-box'}>
                    <input className={'update-content'} type='text' name='name' placeholder='name' onChange={e => this.handleChange(e.target)}/>
                    <input className={'update-content'} type='text' name='image_path' placeholder='image' onChange={e => this.handleChange(e.target)}/>
                    <input className={'update-content'} type='text' name='universe' placeholder='universe' onChange={e => this.handleChange(e.target)}/>
                    <input className={'update-content'} type='text' name='moves' placeholder='moves' onChange={e => this.handleChange(e.target)}/>
                    <input className={'update-content'} type='number' name='weight' placeholder='weight' onChange={e => this.handleChange(e.target)}/>
                    <button className={'update-button'} onClick={this.handleCreateClick}>CREATE</button>
                </div>
            </div>
        )
    }
}

export default AllChar


