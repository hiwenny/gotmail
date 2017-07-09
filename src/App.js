import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import validator from 'validator';
import DOMpurify from 'dompurify';
import { MailForm } from './components';
import { changeMailRecipients, changeMailCCs, changeMailBCCs, 
         changeMailSubject, changeMailContent, 
         updateErrorMessage } from './actions/app';
import { sendEmail } from './utilities/messaging';
import './scss/index.scss';

class App extends Component {

  handleSubmit = (e) => {
    const { dispatch, mailRecipients, mailCCs, mailBCCs, mailSubject, mailContent } = this.props;
    const tempSender = 'mail@example.com';

    if (mailRecipients.length === 0 || !mailContent) {
      return dispatch(updateErrorMessage('Email and message fields must not be empty.'));
    } else if(!this.emailValidation(mailRecipients)) {
      return dispatch(updateErrorMessage('Invalid email(s).'));
    } else if (mailCCs.length > 0 && !this.emailValidation(mailCCs)) {
      return dispatch(updateErrorMessage('Invalid CC email(s).'));
    } else if (mailBCCs.length > 0 && !this.emailValidation(mailBCCs)) {
      return dispatch(updateErrorMessage('Invalid BCC email(s).'));
    }
    mailRecipients.map((email, i) => {
      return dispatch(sendEmail({to: email, from: tempSender, cc: mailCCs, bcc: mailBCCs,
                               subject: mailSubject, text: DOMpurify.sanitize(mailContent)}));
    });
  }

  emailValidation = (arr) => {
    const emailValidation = arr.map((email) => validator.isEmail(email));
    if (emailValidation.indexOf(false) > -1) {
        return false;
      }
    return true;
  }

  handleChange = (type, e) => {
    const payload = e.target.value;
    const { dispatch } = this.props;
    switch(type) {
      case 'email-main':
        this.splitRecipients(payload, 'main');
        break;
      case 'email-CC':
        this.splitRecipients(payload, 'CC');
        break;
      case 'email-BCC':
        this.splitRecipients(payload, 'BCC');
        break;
      case 'subject':
        return dispatch(changeMailSubject(payload));
      case 'content':
        return dispatch(changeMailContent(payload));
      default:
        break;
    }
  }

  splitRecipients = (value, type) => {
    const { dispatch } = this.props;
    const list = value.split(';').filter((val) => val);
    switch(type){
      case 'main':
        return dispatch(changeMailRecipients(list));
      case 'CC':
        return dispatch(changeMailCCs(list));
      case 'BCC':
        return dispatch(changeMailBCCs(list));
      default:
        break;
    }
  }

  // toggleEdit = () => {
  //   const { dispatch, editStatus } = this.props;
  //   return dispatch(changeEditStatus(!editStatus));
  // }

  render() {
    const { mailRecipients, errorMessage } = this.props;
    return (
      <div className="container">
        <MailForm onChange={this.handleChange}
                  onClick={this.handleSubmit} 
                  message={errorMessage}
                  editMode={true} />
                  {/*onEdit={this.toggleEdit*/}                  
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    mailRecipients: store.app.mailRecipients,
    mailCCs: store.app.mailCCs,
    mailBCCs: store.app.mailBCCs,
    mailSubject: store.app.mailSubject,
    mailContent: store.app.mailContent,
    errorMessage: store.app.errorMessage,
    editStatus: store.app.editStatus
  }
}

App.defaultProps = {
  mailRecipients: [],
  mailCCs: [],
  mailBCCs: [],
  mailSubject: null,
  mailContent: null,
  errorMessage: null,
  editStatus: true
}

App.propTypes = {
  mailRecipients: PropTypes.array,
  mailCCs: PropTypes.array,
  mailBCCs: PropTypes.array,
  mailContent: PropTypes.string,
  mailSubject: PropTypes.string,
  dispatch: PropTypes.func,
  editStatus: PropTypes.bool
}

export default connect(mapStateToProps)(App)
