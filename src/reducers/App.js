import * as types from '../actions/constants'

const initState = {
  mailRecipient: null,
  mailSubject: null,
  mailContent: null
}

const app = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_MAIL_RECIPIENT: {
      return {
        ...state, mailRecipient: action.mailRecipient
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
    default:
      return state
  }
}

export default app
