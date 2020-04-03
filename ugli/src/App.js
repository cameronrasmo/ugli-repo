import React from 'react';
import Container from './Container';
import {DCConsumer} from './DirectoryContext.js'

class App extends React.Component{
    state = {
        addToggle: false,
        imgSrc: null
    }

    add = () => {
        this.setState({addToggle: true})
    }

    capture = (e) => {
        e.preventDefault();
        if(e.target.parentNode[0].value !== "" && e.target.parentNode[1].value !== "" && e.target.parentNode[2].value !== ""){
            this.props.addMethod(e.target.parentNode[0].value, e.target.parentNode[1].value, e.target.parentNode[2].value);
            e.target.parentNode[0].value = "";
            e.target.parentNode[1].value = "";
            e.target.parentNode[2].value = "";

            e.target.parentNode[0].placeholder = "Title";
            e.target.parentNode[1].placeholder = "Description";
            e.target.parentNode[2].placeholder = "imgUrl";
            this.setState({addToggle: false, imgSrc: null})
        }
        else{
            e.target.parentNode[0].placeholder = "Title Required";
            e.target.parentNode[1].placeholder = "Description Required";
            e.target.parentNode[2].placeholder = "imgUrl Required";
        }
    }

    inputReturn = (e) => {
        const {value} = e.target;
        this.setState({imgSrc: value})
    }

    render(){
        return(
            <div>
                <h2 id="header">ugli</h2>
                <div id="welcome">
                    <h1 id>welcome</h1>
                    <div id="add" onClick={this.add}>
                        <h1>+</h1>
                    </div>
                </div>
                <DCConsumer>
                    {directory => {
                        return(
                            <React.Fragment>
                                <Container count={directory.count} list={directory.list} submitMethod={directory.submit} deleteMethod={directory.delete}/>
                                {this.state.addToggle === true ? <React.Fragment>
                                                                    <div className="overlay"></div>
                                                                    <div className="add-edit-section">
                                                                        <h1>add</h1>
                                                                        <form className="add-edit-form">
                                                                            <input name="title" placeholder="Title"/>
                                                                            <input name="description" placeholder="Description"/>
                                                                            <input onChange={this.inputReturn} name="imgUrl" placeholder="imgUrl" defaultValue=""/>
                                                                            <button onClick={this.capture}>submit</button>
                                                                        </form>
                                                                        <img src={this.state.imgSrc} alt=""></img>
                                                                 </div></React.Fragment> : null}
                            </React.Fragment>
                        )
                    }}
                </DCConsumer>
            </div>
        )
    }
}

export default App;