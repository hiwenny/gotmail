import * as actionTypes from './constants'

export function changeMailRecipient(recipient) {
  return {
    type: actionTypes.CHANGE_MAIL_RECIPIENT,
    mailRecipient: recipient
  }
}

export function changeMailSubject(subject) {
  return {
    type: actionTypes.CHANGE_MAIL_SUBJECT,
    mailSubject: subject
  }
}

export function changeMailContent(content) {
  return {
    type: actionTypes.CHANGE_MAIL_CONTENT,
    mailContent: content
  }
}


