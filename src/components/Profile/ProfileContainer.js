import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addPostActionCreator,
    setProfileUserDataThunk,
    updateNewPostActionCreator
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.setProfileUserDataThunk(this.props.match.params.userId, 1513);
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile.profile,
        posts: state.profile.posts,
        newPostChange: state.profile.newPostChange
    }
};

let ProfileComponentWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    addPost: addPostActionCreator,
    updatePostText: updateNewPostActionCreator,
    setProfileUserDataThunk
})(ProfileComponentWithRouter)
