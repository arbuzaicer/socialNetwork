import {addMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messages.dialogsData,
        messages: state.messages.messages,
        currentMessage: state.messages.currentMessage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMsg: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessage: (text) => {
            dispatch(updateMessageActionCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
