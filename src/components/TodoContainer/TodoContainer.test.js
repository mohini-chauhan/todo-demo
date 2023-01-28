import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from './TodoContainer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});