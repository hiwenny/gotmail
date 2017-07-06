import React from 'react'
import PropTypes from 'prop-types'

const MailForm = props => {
  return (
    <div className='mailform-container'>
        <h1 className="header">Contact Us</h1>
        <input type="text" placeholder="Subject" onChange={props.onChange.bind(this, 'subject')} />
        <textarea type="text" placeholder="Your message here" required={true} onChange={props.onChange.bind(this, 'content')} />
        <button className="submit" onClick={props.onClick}>Submit</button>
    </div>
  )
}

MailForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default MailForm
