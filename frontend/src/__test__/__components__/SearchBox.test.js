import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import SearchBox from '../../components/SearchBox';

const historyMock = { push: jest.fn() };

describe('SearchBox component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBox history={historyMock} />);
  });

  test('should render component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change input box', () => {
    const input = wrapper.find('input');
    const value = 'Orbea';

    input.simulate('change', { target: { value } });
  });

  test('should call setName and clean input box', () => {
    const value = 'BH';

    // const setName = jest.fn();

    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });

    wrapper.find('form').simulate('submit', { preventDefault() {} });

    // expect(setName).toHaveBeenCalled();
  });
});
