import React from 'react'
import Header from "./Header";
import {setAuthData} from "../../redux/authReducer";
import {connect} from "react-redux";
import {DALconnection} from "../../api/DALapi";

class HeaderContainer extends React.Component {

    componentDidMount() {
    DALconnection.profile.authorization().then(response => {
            if (response.resultCode === 0) {
                this.props.setAuthData(response.data);
            }
        })
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
};

let mapStateToProps = (state) => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuthenticating
    }
};


export default connect(mapStateToProps, {
    setAuthData
})(HeaderContainer);
