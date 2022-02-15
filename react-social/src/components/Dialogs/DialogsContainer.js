import { updateNewMessageTextActionCreater, sendMessageActionCreater } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessage: () => {
      dispatch(sendMessageActionCreater());
    },
    sendMessage: (text) => {
      dispatch(updateNewMessageTextActionCreater(text));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;