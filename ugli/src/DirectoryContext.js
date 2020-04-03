import React from 'react';
const {Provider, Consumer} = React.createContext();

class DCProvider extends React.Component{
    constructor(){
        super()
        this.state = {
            list: [],
            count: 0
        }
    }

    add = (title, description, imgUrl) => {
        let addArr = this.state.list.map(item => item);
        let newObject = {
            title: title,
            description: description,
            imgUrl: imgUrl,
            id: this.state.count
        }
        addArr.push(newObject);
        this.setState(prev => {
            return{
                list: addArr,
                count: prev.count + 1
            }
        });
    }

    submit = (count, title, description, imgUrl) => {
        let editArr = this.state.list.map(item => item);
        editArr[count - 1].title = title;
        editArr[count - 1].description = description;
        editArr[count - 1].imgUrl = imgUrl;
        this.setState(prev => {
            return{
                list: editArr,
            }
        });
    }

    delete = (count) => {
        let deleteArr = this.state.list.map(item => item);
        if(count > -1){
            deleteArr.splice(count - 1, 1);
        }
        this.setState(prev => {
            return{
                list: deleteArr,
                count: prev.count - 1
            }
        });
    }

    render(){
        return(
            <Provider value={{list: this.state.list, add: this.add, submit: this.submit, delete: this.delete, count: this.state.count}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {DCProvider, Consumer as DCConsumer};