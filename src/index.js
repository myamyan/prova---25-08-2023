import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import CadastroCliente from './pages/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>


        <Route path='/' element={<CadastroCliente/>}/>

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);
