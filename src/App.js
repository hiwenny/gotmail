import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MailForm } from './components'
import { changeMailRecipients, changeMailSubject, changeMailContent, changeEditStatus } from './actions/app'
import './scss/index.scss'

class App extends Component {

  handleSubmit = (e) => {
    const { dispatch, mailSubject, mailContent, mailRecipients } = this.props;
    if (mailRecipients && mailContent) {
      //send contents
      return alert('successful');
    }
    return alert('Mail recipient and message field must not be empty.');
  }

  handleChange = (type, e) => {
    const payload = e.target.value;
    const { dispatch } = this.props;
    switch(type) {
      case 'recipient':
        return dispatch(changeMailRecipients(payload));
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
    const { mailSubject, mailContent, mailRecipients, editStatus } = this.props;
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
    mailSubject: store.app.mailSubject,
    mailContent: store.app.mailContent,
    editStatus: store.app.editStatus
  }
}

App.defaultProps = {
  mailRecipients: null,
  mailSubject: null,
  mailContent: null,
  editStatus: true
}

App.propTypes = {
  mailRecipients: PropTypes.string,
  mailContent: PropTypes.string,
  mailSubject: PropTypes.string,
  dispatch: PropTypes.func,
  editStatus: PropTypes.bool
}

export default connect(mapStateToProps)(App)
