import React from 'react';
import Card from './Card.js';

class Container extends React.Component{
    render(){
        const displayed = this.props.list.map(item => {
            return <Card count={this.props.count} submitMethod={this.props.submitMethod} deleteMethod={this.props.deleteMethod} title={item.title} description={item.description} imgUrl={item.imgUrl}/>
        })
        return(
            <div id="card-container">
                {displayed}
            </div>
        )
    }
}

export default Container;