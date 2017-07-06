import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MailForm } from './components'
import { changeMailRecipient, changeMailSubject, changeMailContent } from './actions/app'
import './scss/index.scss'

class App extends Component {

  // sampleFunction = (sampleParam, e) => {
  //   const { dispatch } = this.props;
  //   console.log(sampleParam);
  //   console.log(e)
  //   return dispatch(sampleAction(sampleParam));
  // }

  handleSubmit = (recipient, subject, content, e) => {
  //   const { dispatch, mailSubject, mailContent, mailRecipient } = this.props;
  //   alert(mailSubject)
  }

  handleChange = (type, e) => {
    const payload = e.target.value;
    const { dispatch } = this.props;
    switch(type) {
      case 'subject':
        return dispatch(changeMailSubject(payload));
      case 'content':
        return dispatch(changeMailContent(payload));
      default:
        return;
    }
  }

  render() {
    const { mailSubject, mailContent, mailRecipient } = this.props;
    return (
      <div className='container'>
        <MailForm onSubjectChange={this.handleSubjectChange}
                  onContentChange={this.handleContentChange}
                  onChange={this.handleChange}
                  onClick={this.handleSubmit.bind(mailRecipient, mailSubject, mailContent)} />
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    mailRecipient: store.app.mailRecipient,
    mailSubject: store.app.mailSubject,
    mailContent: store.app.mailContent
  }
}

App.defaultProps = {
  mailRecipient: null,
  mailSubject: null,
  mailContent: null
}

App.propTypes = {
  mailRecipient: PropTypes.string,
  mailContent: PropTypes.string,
  mailSubject: PropTypes.string,
  dispatch: PropTypes.func,
}

export default connect(mapStateToProps)(App)
