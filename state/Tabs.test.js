import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import renderer from 'react-test-renderer';

describe(`Tabs Component`, () => {
    const tabsProp = [
        { name: 'First tab',
        content: 'Content for first tab'},
        { name: 'Second tab',
          content: 'Content for second tab'},
        { name: 'Third tab',
          content: 'Content for third tab'}
      ];
    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})