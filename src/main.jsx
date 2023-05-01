import React from 'react';

import ReactDOM from 'react-dom/client';

import TodoApp from './components/TodoApp';

import './styles/App.css';

import NavBar from './components/NavBar';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <TodoApp />
    <NavBar />
  </React.StrictMode>,
);
