import React from 'react';
import ReactDOM from 'react-dom';
import ToDoTile from './ToDoTile';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToDoTile />, div);
  ReactDOM.unmountComponentAtNode(div);
});