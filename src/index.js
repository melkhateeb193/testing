import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/favouratesactions/store';
import { LanguageProvider } from "./components/favouratesactions/langcontext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <LanguageProvider>
        <App />
        </LanguageProvider>,
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
