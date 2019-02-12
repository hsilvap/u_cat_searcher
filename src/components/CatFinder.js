import React, { Component } from 'react';
import { connect } from "react-redux";
import {AddCats} from '../js/actions/index'

function mapDispatchToProps(dispatch) {
    return {
      addCat: () => dispatch(AddCats())
    };
}

class CatFinder extends Component {

    fetchCat = e => {
        this.props.addCat();
    }

    render() {
        return (
            <div>
                <button className="app-button" onClick={this.fetchCat}>Get me a random cat!</button>
            </div>
        );
    }
}

export default connect(null,mapDispatchToProps)(CatFinder);