import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { currentCat: state.cats };
};

class CatDisplayer extends Component {

    render() {

        if(this.props.currentCat.loading === true){
            return (
                <div>
                    Loading....
                </div>
            )
        }
        if (this.props.currentCat.cat !== "") {

            return (
                <div>
                    <img src={this.props.currentCat.cat} alt="random cat"></img>
                </div>
            );
        }
        return(
            <div> Click the button !</div>
        )
    }
}

export default connect(mapStateToProps)(CatDisplayer);