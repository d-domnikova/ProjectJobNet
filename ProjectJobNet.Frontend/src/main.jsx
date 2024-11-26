import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import Header from "./components/pageComponents/Header";
import Footer from "./components/pageComponents/Footer";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
        <Header />
          <div className="flex-grow">
            <App />
          </div>
          <Footer />
        </div>
    </BrowserRouter>
  </React.StrictMode>
)
