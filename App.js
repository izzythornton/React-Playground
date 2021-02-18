import React, { Component } from 'react';
import './App.css';
import renderer from 'react-test-renderer';
import Accordion from './state-drills/Accordion';

const sections = [
  {
    title: 'First Section',
    content: 'This is the first content'
  },
  {
    title: 'Second Section',
    content: 'This is the second content'
  },
  {
    title: 'Third Section',
    content: 'This is the third content'
  },
]

class App extends Component {
  render() {
    return (
      <div className='App'>
          <h2>Accordion</h2>
          <Accordion sections={sections} />
      </div>
    );
  }
}