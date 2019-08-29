import React from 'react';
import {connect} from "react-redux";
import {
    followThunk, getUsersThunk, setCurrentPageThunk, unfollowThunk
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersRESTAPIComp extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.count);
    }

    setCurrentPage = (currentPage) => {
        this.props.setCurrentPageThunk(currentPage, this.props.count);
    };

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader />}
            <Users currentPage = {this.props.currentPage}
                   usersLength = {this.props.usersLength}
                   usersOnPage = {this.props.usersOnPage}
                   setCurrentPage = {this.setCurrentPage}
                   users = {this.props.users}
                   myId = {this.props.yourId}
                   unfollowThunk = {this.props.unfollowThunk}
                   followThunk = {this.props.followThunk}
            />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersLength: state.usersPage.usersLength,
        currentPage: state.usersPage.currentPage,
        usersOnPage: state.usersPage.pageCounter,
        count: state.usersPage.pageCounter,
        isFetching: state.usersPage.isFetching,
        yourId: state.auth.data.id
    }
};

const UsersContainer = connect(mapStateToProps, {
    getUsersThunk,
    setCurrentPageThunk,
    unfollowThunk,
    followThunk
})(UsersRESTAPIComp);

export default UsersContainer;