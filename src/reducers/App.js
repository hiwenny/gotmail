import * as types from '../actions/constants'

const initState = {
  mailRecipients: null,
  mailSubject: null,
  mailContent: null,
  editStatus: true
}

const app = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_MAIL_RECIPIENT: {
      return {
        ...state, mailRecipients: action.mailRecipients
      }
    }
    case types.CHANGE_MAIL_SUBJECT: {
      return {
        ...state, mailSubject: action.mailSubject
      }
    }
    case types.CHANGE_MAIL_CONTENT: {
      return {
        ...state, mailContent: action.mailContent
      }
    }
    case types.CHANGE_EDIT_STATUS: {
      return {
        ...state, editStatus: action.editStatus
      }
    }
    default:
      return state
  }
}

export default app
