import React, {Component} from 'react';
import Char from './Char'

class AllChar extends Component {
    

    render() {
        return(
            <div className={'character-view'}>
                <h1 className={'All-Characters-Header'}>Characters</h1>
                {this.props.characters.map((character) => {
                    return <Char key={character.id} character={character} toggleView={this.props.toggleView}/>
                })}
            </div>
        )
    }
}

export default AllChar