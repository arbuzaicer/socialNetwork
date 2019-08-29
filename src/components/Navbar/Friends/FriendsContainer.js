import React from 'react'
import {connect} from "react-redux";
import Friends from "./Friends";
import {setFriendsListThunk, setTotalUsersThunk} from "../../../redux/sidebarReducer";

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.setFriendsListThunk();
        this.props.setTotalUsersThunk();
    }

    render() {
        return (
            <Friends friends={this.props.friends} totalUsers={this.props.totalUsers}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
        totalUsers: state.sidebar.totalUsers
    }
};


export default connect(mapStateToProps, {
    setFriendsListThunk,
    setTotalUsersThunk
})(FriendsContainer);
