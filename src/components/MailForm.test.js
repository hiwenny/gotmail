/* Can do with more thorough tests. */
import React from 'react'
import { shallow } from 'enzyme'
import MailForm from './MailForm'

describe('MailForm component', () => {
  const spyHandleChange = jest.fn()
  const spyhandleSubmit = jest.fn()
  const wrapper = shallow(<MailForm onChange={spyHandleChange}
                                    onClick={spyhandleSubmit} 
                                    message={'not an error.'} />);

  test('has four input fields, a textarea and a submit buttons in edit mode', () => {
    expect(wrapper.find('input')).toHaveLength(4);
    expect(wrapper.find('textarea')).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  test('submits the form on clicking Submit button', () => {
    wrapper.find('.mailform-submit').simulate('click');
    expect(spyhandleSubmit).toHaveBeenCalled();
  });

  test('renders warning message if it exists.', () => {
    expect(wrapper.find('.error-message')).toHaveLength(1);
  });
})