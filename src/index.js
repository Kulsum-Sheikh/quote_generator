import React from "react";
import ReactDOM from 'react-dom';

import App from './App.js';

import { createRoot } from "react-dom/client";
const container = document.getElementById('root');
const root =createRoot(container);
root.render(<React.StrictMode>
  <App />
</React.StrictMode>)
//ReactDOM.render(<App />, document.getElementById('root'));