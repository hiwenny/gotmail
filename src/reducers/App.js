import * as types from '../actions/constants'

const initState = {
  mailRecipients: [],
  mailCCs: [],
  mailBCCS: [],
  mailSubject: null,
  mailContent: null,
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
        ...state, mailCCs: action.mailCCS
      }
    }
    case types.CHANGE_MAIL_BCCS: {
      return {
        ...state, mailBCCS: action.mailBCCS
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
