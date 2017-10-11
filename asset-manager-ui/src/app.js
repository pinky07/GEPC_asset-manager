import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';
import 'react-contexify/dist/ReactContexify.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/css/app.css';

import React from 'react';

import Content from './components/content';
import Header from './components/header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
};

export default App;
