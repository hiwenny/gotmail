import * as types from '../actions/constants'

const initState = {
  mailRecipients: [],
  mailCCs: [],
  mailBCCS: [],
  mailSubject: null,
  mailContent: null,
  errorMessage: null,
  editStatus: true
}

const app = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_MAIL_RECIPIENTS: {
      return {
        ...state, mailRecipients: action.mailRecipients
      }
    }
    case types.CHANGE_MAIL_CCS: {
      return {
        ...state, mailCCs: action.mailCCs
      }
    }
    case types.CHANGE_MAIL_BCCS: {
      return {
        ...state, mailBCCs: action.mailBCCs
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
    case types.UPDATE_ERROR_MESSAGE: {
      return {
        ...state, errorMessage: action.errorMessage
      }
    }
    case types.RESET_ERROR_MESSAGE: {
      return {
        ...state, errorMessage: null
      }
    }
    default:
      return state
  }
}

export default app
