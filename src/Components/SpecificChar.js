import React, {Component} from 'react';

class SpecificChar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.specificChar.id,
            name: props.specificChar.name,
            image_path: props.specificChar.image_path,
            universe: props.specificChar.universe,
            moves: props.specificChar.moves,
            weight: props.specificChar.weight,
            edit: true
        }
    }

    toggleEdit = () => {        
        this.state.edit ? this.setState({
            edit: false
        }) : this.setState({
            edit: true
        });
    }

    handleChange = target => {
        let { name, value } = target
        
        this.setState({
            [name]: value
        })
    }

    handleUpdateClick = () => {
        this.props.updateCharacter(this.state)
        this.props.toggleView();
        this.setState({
          edit: true
        })
    }

    handleDeleteClick = () => {
        this.props.deleteCharacter(this.state.id)
        this.props.toggleView();
        this.setState({
            edit: true
        })
    }

    render() {
        return this.state.edit ? (
            <div className={'specific-view'}>
                <button className={'back-button'} onClick={this.props.toggleView}><img src={'https://cdn2.iconfinder.com/data/icons/arrows-1-2/416/Arrow_Left3-512.png'} alt='left arrow' width='30'/></button>
                <button className={'edit-button'} onClick={this.toggleEdit}>EDIT</button>
                <h1>{this.props.specificChar.name}</h1>
                <img src={this.props.specificChar.image_path} alt={this.props.specificChar.name} width={'300'} style={{ marginBottom: '3rem'}}/>
                <div className={'stats-view-box'}>
                    <h2>{`Universe: ${this.props.specificChar.universe}`}</h2>
                    <h2>{`Moves: ${JSON.stringify(this.props.specificChar.moves)}`}</h2>
                    <h2>{`Weight: ${this.props.specificChar.weight}`}</h2>
                </div>
            </div>
        ) : (
            <div className={'specific-view'}>
                <button className={'back-button'} onClick={this.props.toggleView}><img src={'https://cdn2.iconfinder.com/data/icons/arrows-1-2/416/Arrow_Left3-512.png'} alt='left arrow' width='30'/></button>
                <button className={'edit-button'} onClick={this.toggleEdit}>EDIT</button>
                <h1>{this.props.specificChar.name}</h1>
                <img src={this.props.specificChar.image_path} alt={this.props.specificChar.name} width={'300'} style={{ marginBottom: '3rem'}}/>
                <h2>{`Universe: ${this.props.specificChar.universe}`}</h2>
                <h2>{`Moves: ${JSON.stringify(this.props.specificChar.moves)}`}</h2>
                <h2>{`Weight: ${this.props.specificChar.weight}`}</h2>

                <div className={'edit-box'}>
                    <input className={'update-content'} type='text' name='name' placeholder='name' onChange={e => this.handleChange(e.target)}/>
                    <input className={'update-content'} type='text' name='image_path' placeholder='image' onChange={e => this.handleChange(e.target)}/>
                    <input className={'update-content'} type='text' name='universe' placeholder='universe' onChange={e => this.handleChange(e.target)}/>
                    <input className={'update-content'} type='text' name='moves' placeholder='moves' onChange={e => this.handleChange(e.target)}/>
                    <input className={'update-content'} type='number' name='weight' placeholder='weight' onChange={e => this.handleChange(e.target)}/>
                    <button className={'update-button'} onClick={this.handleUpdateClick}>UPDATE CHARACTER</button>
                    <button className={'delete-button'} onClick={this.handleDeleteClick}>DELETE CHARACTER</button>
                </div>
            </div>
        )
    }
}

export default SpecificChar