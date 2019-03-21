import React, {Component} from 'react';

class SpecificChar extends Component {
    constructor() {
        super();

        this.state = {
            edit: false
        }
    }

    toggleEdit = () => {        
        this.state.edit ? this.setState({
            edit: false
        }) : this.setState({
            edit: true
        });
    }

    render() {
        return this.state.edit ? (
            <div className={'specific-view'}>
                <button className={'back-button'} onClick={this.props.toggleView}><img src={'https://cdn2.iconfinder.com/data/icons/arrows-1-2/416/Arrow_Left3-512.png'} alt='left arrow' width='30'/></button>
                <button className={'edit-button'} onClick={this.toggleEdit}>EDIT</button>
                <h1>{this.props.specificChar.name}</h1>
                <img src={this.props.specificChar.image_path} alt={this.props.specificChar.name} style={{ marginBottom: '3rem'}}/>
                <h2>Universe:<p>{this.props.specificChar.universe}</p></h2>
                <h2>Moves:<p>{this.props.specificChar.moves}</p></h2>
                <h2>Weight:<p>{this.props.specificChar.weight}</p></h2>
            </div>
        ) : (
            <div className={'specific-view'}>
                <button className={'back-button'} onClick={this.props.toggleView}><img src={'https://cdn2.iconfinder.com/data/icons/arrows-1-2/416/Arrow_Left3-512.png'} alt='left arrow' width='30'/></button>
                <button className={'edit-button'} onClick={this.toggleEdit}>EDIT</button>
                <h1>{this.props.specificChar.name}</h1>
                <img src={this.props.specificChar.image_path} alt={this.props.specificChar.name} style={{ marginBottom: '3rem'}}/>
                <h2>Universe:<p>{this.props.specificChar.universe}</p></h2>
                <h2>Moves:<p>{this.props.specificChar.moves}</p></h2>
                <h2>Weight:<p>{this.props.specificChar.weight}</p></h2>

                <div className={'edit-box'}>
                    <input className={'update-content'} placeholder='name'/>
                    <input className={'update-content'} placeholder='universe'/>
                    <input className={'update-content'} placeholder='moves'/>
                    <input className={'update-content'} placeholder='weight'/>
                    <button className={'update-button'}>UPDATE CHARACTER</button>
                    <button className={'delete-button'}>DELETE CHARACTER</button>
                </div>
            </div>
        )
    }
}

export default SpecificChar