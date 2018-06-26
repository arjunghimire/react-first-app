import React, { Component } from 'react';
import Display from "Display";

class Form extends Component {
    constructor(){
        super();
        this.state = {
            fullname: '',
            address: ''
        }
    }
    handleChange = (key,event) => {
        this.setState({[key]: event.target.value })
    }

    render() {
        return (
            <div>
              <br/>
              <input type="text" onChange={this.handleChange.bind(this,"fullname")} value={this.state.name}/>
              <input type="text" onChange={this.handleChange.bind(this,"address")} value={this.state.address}/>
              <Display name={this.state.fullname} address={this.state.address}/>
            </div>
        );
    }
}

export default Form;