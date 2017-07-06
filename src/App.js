import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MailForm } from './components'
import { changeMailRecipient, changeMailSubject, changeMailContent, changeEditStatus } from './actions/app'
import './scss/index.scss'

class App extends Component {

  handleSubmit = (e) => {
    const { dispatch, mailSubject, mailContent, mailRecipient } = this.props;
    if (mailRecipient && mailContent) {
      //send contents
    }
    return alert('Mail recipient and message field must not be empty.');
  }

  handleChange = (type, e) => {
    const payload = e.target.value;
    const { dispatch } = this.props;
    switch(type) {
      case 'recipient':
        return dispatch(changeMailRecipient(payload));
      case 'subject':
        return dispatch(changeMailSubject(payload));
      case 'content':
        return dispatch(changeMailContent(payload));
      default:
        return;
    }
  }

  toggleEdit = () => {
    const { dispatch, editStatus } = this.props;
    return dispatch(changeEditStatus(!editStatus));
  }

  render() {
    const { mailSubject, mailContent, mailRecipient, editStatus } = this.props;
    return (
      <div className="container">
        <MailForm onChange={this.handleChange}
                  onClick={this.handleSubmit} 
                  onEdit={this.toggleEdit}
                  recipient={mailRecipient} 
                  editMode={editStatus} />
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    mailRecipient: store.app.mailRecipient,
    mailSubject: store.app.mailSubject,
    mailContent: store.app.mailContent,
    editStatus: store.app.editStatus
  }
}

App.defaultProps = {
  mailRecipient: null,
  mailSubject: null,
  mailContent: null,
  editStatus: true
}

App.propTypes = {
  mailRecipient: PropTypes.string,
  mailContent: PropTypes.string,
  mailSubject: PropTypes.string,
  dispatch: PropTypes.func,
  editStatus: PropTypes.bool
}

export default connect(mapStateToProps)(App)
