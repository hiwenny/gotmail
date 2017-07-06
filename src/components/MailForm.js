import React from 'react'
import PropTypes from 'prop-types'

const MailForm = props => {
  return (
    <div className='mailform-container'>
        <input type="text" placeholder="Subject" onChange={props.onChange.bind(this, 'subject')} />
        <textarea type="text" placeholder="Your message here" required={true} onChange={props.onChange.bind(this, 'content')} />
        <button className="submit" onClick={props.onClick}>Submit</button>
    </div>
  )
}

MailForm.propTypes = {
  extraClasses: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default MailForm
