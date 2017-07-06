import React from 'react'
import { shallow } from 'enzyme'
import MailForm from './MailForm'

describe('MailForm component', () => {
  const spyHandleChange = jest.fn()
  const spyhandleSubmit = jest.fn()
  const wrapper = shallow(<MailForm onChange={spyHandleChange}
                                    onClick={spyhandleSubmit} />);

  test('has two input fields and a submit button', () => {
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('textarea')).toHaveLength(1);
    expect(wrapper.find('button.submit')).toHaveLength(1);
  });

  test('calls the submit handler on click', () => {
    wrapper.find('.submit').simulate('click')
    expect(spyhandleSubmit).toHaveBeenCalled();
  });
})
