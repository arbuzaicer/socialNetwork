import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostChange: state.profile.newPostChange
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updatePostText: (text) => {
            dispatch(updateNewPostActionCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;