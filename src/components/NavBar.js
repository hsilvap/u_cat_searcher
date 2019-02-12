import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
  
const mapStateToProps = state => {
    return { currentUser: state.user };
};

class NavBar extends Component {
    componentDidMount() {
        if (this.props.currentUser.user === '') {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <header className="App-header">
                <h1>Welcome to the cat searcher, {this.props.currentUser.user}</h1>
            </header>
        );
    }

}
export default connect(mapStateToProps)(withRouter(NavBar));