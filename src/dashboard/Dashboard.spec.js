// Test away

import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() =>{
  wrapper = rtl.render(<Dashboard />);
})

describe('Dashboard component', () =>{

  test('gate starts open', () => {
    expect(wrapper.queryByText(/open/i)).toBeInTheDocument();
  });

  test('button to close gate', () => {
    expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
  })

  test('gate starts unlocked', () => {
    expect(wrapper.queryByText(/unlocked/i)).toBeInTheDocument();
  })

  test('button to lock gate', () => {
    expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
  })

})