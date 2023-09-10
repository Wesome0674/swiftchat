import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { UserContextProvider } from './usercontext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <UserContextProvider>
       <HashRouter>
          <App />
       </HashRouter>
    </UserContextProvider>
);

