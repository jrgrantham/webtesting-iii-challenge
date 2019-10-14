// Test away!

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

describe('Display functionality', () => {

  test('Displays unlocked, displays open', () => {
    const wrapper = rtl.render(<Display locked={false} closed={false} />);
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
  });

  test('Displays locked, displays closed', () => {
    const wrapper = rtl.render(<Display locked={true} closed={true} />);
    expect(wrapper.queryByText(/locked/i)).toBeInTheDocument();
    expect(wrapper.queryByText(/closed/i)).toBeInTheDocument();
  });

  test('Has red-led for locked and closed', () => {
    const wrapper = rtl.render(<Display locked={true} closed={true} />);
    expect(wrapper.queryByText(/locked/i)).toHaveClass('red-led');
    expect(wrapper.queryByText(/closed/i)).toHaveClass('red-led');
  });

  test('Has green-led for unlocked and open', () => {
    const wrapper = rtl.render(<Display locked={false} closed={false} />);
    expect(wrapper.queryByText(/unlocked/i)).toHaveClass('green-led');
    expect(wrapper.queryByText(/open/i)).toHaveClass('green-led');
  });

})