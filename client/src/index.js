import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { PokeProvider } from './context/PokeContext';
import './css/index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <PokeProvider>
            <App />
        </PokeProvider>
    </Router>
);


