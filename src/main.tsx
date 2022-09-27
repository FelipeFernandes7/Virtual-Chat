import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

import Content from './styles/styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Content/>
    <App/>
  </React.StrictMode>
)
