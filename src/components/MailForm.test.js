import React from 'react'
import { shallow } from 'enzyme'
import MailForm from './MailForm'

describe('MailForm component', () => {
  const spyHandleChange = jest.fn()
  const spyhandleSubmit = jest.fn()
  const wrapper = shallow(<MailForm onChange={spyHandleChange}
                                onClick={spyhandleSubmit} 
                                recipient={null} />);

  test('has two input fields, a textarea and two submit buttons in edit mode', () => {
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('textarea')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(2);
  });

  test('calls the submit handler on click', () => {
    wrapper.find('.submit').simulate('click')
    expect(spyhandleSubmit).toHaveBeenCalled();
  });

  test('has one input field, a textarea and a submit button if edit mode is toggled off', () => {
    const wrapperRecipient = shallow(<MailForm onChange={spyHandleChange}
                                      onClick={spyhandleSubmit} 
                                      recipient={'mock@mail.com'} />);
    expect(wrapperRecipient.find('input')).toHaveLength(1);
    expect(wrapperRecipient.find('textarea')).toHaveLength(1);
    expect(wrapperRecipient.find('button.submit')).toHaveLength(1);
  });
})