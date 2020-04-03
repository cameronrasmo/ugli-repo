import React from 'react';

class Card extends React.Component{
    state = {
        editToggle: false,
        id: this.props.count,
        imgSrc: null
    }

    edit = () => {
        this.setState({editToggle: true});
    }

    capture = (e) => {
        e.preventDefault();
        this.props.submitMethod(this.state.id, e.target.parentNode[0].value, e.target.parentNode[1].value, e.target.parentNode[2].value);
        e.target.parentNode[0].value = "";
        e.target.parentNode[1].value = "";
        e.target.parentNode[2].value = "";
        this.setState({editToggle: false});
    }

    delete = (e) => {
        e.preventDefault();
        this.props.deleteMethod(this.state.id);
        this.setState({editToggle: false});
    }

    inputReturn = (e) => {
        const {value} = e.target;
        this.setState({imgSrc: value});
    }

    render(){
        return(
            <div>
                <div className="card-element-container" onClick={this.edit}>
                    <img src={this.props.imgUrl} alt="img"></img>
                    <h3>{this.props.title}</h3>  
                    <h4>{this.props.description}</h4>
                </div>   
                
                {this.state.editToggle === true ? <React.Fragment>
                    <div className="overlay" id="edit-overlay"></div>
                    <div className="add-edit-section" id="edit-section">
                        <h1>edit</h1>
                        <form className="add-edit-form">
                            <input placeholder="Title" defaultValue={this.props.title}/>
                            <input placeholder="Description" defaultValue={this.props.description}/>
                            <input onChange={this.inputReturn} placeholder="imgurl" defaultValue={this.props.imgUrl}/>
                            <button id="submit-button" onClick={this.capture}>submit</button>
                            <button id="delete-button" onClick={this.delete}>delete</button>
                        </form>
                        <img src={this.state.imgSrc !== null ? this.state.imgSrc : this.props.imgUrl} alt=""></img>
                    </div>
                </React.Fragment> : null}
            </div>
        )
    }
}

export default Card;