import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import Product from './../../components/Product';

describe('Product', () => {
  let wrapper;

  beforeEach(() => {
    const product = {
      _id: 1,
      image: 'https:://localhost/algo.jpg',
      name: 'algo',
      rating: 1,
      numReviews: 1,
      price: 1,
    };

    wrapper = shallow(<Product product={product} />);
  });

  test('should render <Product/> component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
