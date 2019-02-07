import React, {Component} from 'react';
import { connect } from 'react-redux'

import { getFriend } from "../actions"

import FriendsList from "./FriendsList";

class FriendsContainer extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getFriend()
    }

    render() {
        return (
            <div>
                <FriendsList friends={this.props.friends} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.error,

})

export default connect(
    mapStateToProps,
    {
        getFriend
    }
)(FriendsContainer);
