import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import Rating from './../../components/Rating';

describe('Rating', () => {
  let wrapper;

  let rating = 0;
  let numReviews = 0;

  beforeEach(() => {
    wrapper = shallow(<Rating rating={rating} numReviews={numReviews} />);
  });

  test('should render <Rating/> component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should return 0,5 stars', () => {
    rating = 0.5;
    numReviews = 1;

    wrapper = shallow(<Rating rating={rating} numReviews={numReviews} />);

    const i1 = wrapper.find('#star1');

    expect(i1.hasClass('fa fa-star-half-o')).toBeTruthy();
  });

  test('should return 1,5 stars', () => {
    rating = 1.5;
    numReviews = 1;

    wrapper = shallow(<Rating rating={rating} numReviews={numReviews} />);

    const i1 = wrapper.find('#star1');
    const i2 = wrapper.find('#star2');

    expect(i1.hasClass('fa fa-star')).toBeTruthy();
    expect(i2.hasClass('fa fa-star-half-o')).toBeTruthy();
  });

  test('should return 2,5 stars', () => {
    rating = 2.5;
    numReviews = 1;

    wrapper = shallow(<Rating rating={rating} numReviews={numReviews} />);

    const i2 = wrapper.find('#star2');
    const i3 = wrapper.find('#star3');

    expect(i2.hasClass('fa fa-star')).toBeTruthy();
    expect(i3.hasClass('fa fa-star-half-o')).toBeTruthy();
  });

  test('should return 3,5 stars', () => {
    rating = 3.5;
    numReviews = 1;

    wrapper = shallow(<Rating rating={rating} numReviews={numReviews} />);

    const i3 = wrapper.find('#star3');
    const i4 = wrapper.find('#star4');

    expect(i3.hasClass('fa fa-star')).toBeTruthy();
    expect(i4.hasClass('fa fa-star-half-o')).toBeTruthy();
  });

  test('should return 4,5 stars', () => {
    rating = 4.5;
    numReviews = 1;

    wrapper = shallow(<Rating rating={rating} numReviews={numReviews} />);

    const i4 = wrapper.find('#star4');
    const i5 = wrapper.find('#star5');

    expect(i4.hasClass('fa fa-star')).toBeTruthy();
    expect(i5.hasClass('fa fa-star-half-o')).toBeTruthy();
  });

  test('should return 5 stars', () => {
    rating = 5;
    numReviews = 1;

    wrapper = shallow(<Rating rating={rating} numReviews={numReviews} />);

    const i5 = wrapper.find('#star5');

    expect(i5.hasClass('fa fa-star')).toBeTruthy();
  });
});
