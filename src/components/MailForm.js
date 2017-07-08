import React from 'react'
import PropTypes from 'prop-types'

const MailForm = props => {
  const inputClass = props.editMode ? 'mailform-input' : 'mailform-input inactive';
  const warningStar = <span className="warning">*</span>
  return (
    <div className='mailform-container'>
        <h1 className="header">New Message</h1>
        <div className="mailform-recipient-container">
          <span className="error-message">{props.message}</span>
          <div className="input-container">
            <label htmlFor="email">{warningStar}To:</label>
            <input type="text" id="email" placeholder="To add multiple emails use semicolon (;)" className={inputClass} onChange={props.onChange.bind(this, 'email-main')} readOnly={!props.editMode ? true : false} /> 
          </div>
          <div className="input-container">
            <div className="half-width">
              <label htmlFor="CC">CC:</label>
              <input type="text" id="CC" className={inputClass} onChange={props.onChange.bind(this, 'email-CC')} readOnly={!props.editMode ? true : false} />
            </div>
            <div className="half-width">
              <label htmlFor="BCC">BCC:</label>
              <input type="text" className={inputClass} onChange={props.onChange.bind(this, 'email-BCC')} readOnly={!props.editMode ? true : false} />
            </div>
          </div>
          {/*<button className="mailform-recipient-button" onClick={props.onEdit.bind(this)}>Edit</button>*/}
        </div>
        <input type="text" className="mailform-subject" placeholder="Subject" onChange={props.onChange.bind(this, 'subject')} />
        <textarea type="text" placeholder="*Your message here..." required={true} onChange={props.onChange.bind(this, 'content')} />
        <span className="info-message">{warningStar} required</span>
        <button className="mailform-submit" onClick={props.onClick}>Submit</button>
    </div>
  );
}

MailForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default MailForm
