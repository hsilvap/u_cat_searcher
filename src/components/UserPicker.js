import React, { Component } from 'react';
import { connect } from "react-redux";
import { AddUser } from '../js/actions';

function mapDispatchToProps(dispatch) {
    return {
      addUser: user => dispatch(AddUser(user))
    };
  }

class UserPicker extends Component {

    constructor(){
        super();
        this.state = {
            user: ''
        };
    }
    
    handleChange = e => {
        this.setState({
            user: e.target.value
        })
    }

    goToMain = (event) => {
        event.preventDefault();
        this.props.addUser(this.state.user);
        this.props.history.push(`/user/${this.state.user}`);
    }

    render() {
        return (
            <form  className="login" onSubmit={(e)=> this.goToMain(e)}>
            <h2> Please Enter Your Name</h2>
            <input type="text" required placeholder="User name" value={this.state.user} onChange={this.handleChange}/>
            <button type="submit" > Start! </button>
            </form>
        );
    }
}


const Picker = connect(null, mapDispatchToProps)(UserPicker);
export default Picker;