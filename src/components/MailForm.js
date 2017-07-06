import React from 'react'
import PropTypes from 'prop-types'

const MailForm = props => {
  return (
    <div className='mailform-container'>
        <h1 className="header">Contact Us</h1>
        <div className="mailform-recipient-container">
          {!props.editMode ? <input type="text" className="mailform-recipient-email inactive" readOnly={true} /> : <input type="text" className="mailform-recipient-email" onChange={props.onChange.bind(this, 'recipient')}/>}
          <button className="mailform-recipient-button" onClick={props.onEdit.bind(this)}>Edit</button>
        </div>
        <input type="text" className="mailform-subject" placeholder="Subject" onChange={props.onChange.bind(this, 'subject')} />
        <textarea type="text" placeholder="Your message here" required={true} onChange={props.onChange.bind(this, 'content')} />
        <button className="mailform-submit" onClick={props.onClick}>Submit</button>
    </div>
  )
}

MailForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default MailForm
