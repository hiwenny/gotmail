import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MailForm } from './components'
import { changeMailRecipients, changeMailCCs, changeMailBCCs, changeMailSubject, changeMailContent, changeEditStatus } from './actions/app'
import './scss/index.scss'

class App extends Component {

  handleSubmit = (e) => {
    const { dispatch, mailSubject, mailContent, mailRecipients } = this.props;
    console.log(mailRecipients)
    console.log(mailContent)
    if (mailRecipients.length > 0 && mailContent) {
      //send contents
      console.log('success')
    }
    return console.log('Mail recipient and message field must not be empty.');
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

  toggleEdit = () => {
    const { dispatch, editStatus } = this.props;
    return dispatch(changeEditStatus(!editStatus));
  }

  render() {
    const { mailSubject, mailCCs, mailBCCs, mailContent, mailRecipients, editStatus } = this.props;
    return (
      <div className="container">
        <MailForm onChange={this.handleChange}
                  onClick={this.handleSubmit} 
                  onEdit={this.toggleEdit}
                  recipient={mailRecipients}
                  editMode={editStatus} />
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
    editStatus: store.app.editStatus
  }
}

App.defaultProps = {
  mailRecipients: [],
  mailCCs: [],
  mailBCCs: [],
  mailSubject: null,
  mailContent: null,
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
