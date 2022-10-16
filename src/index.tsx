import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as AppRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
//
import './styles/main.scss';
import App from './App';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AppRouter>
        <App />
      </AppRouter>
    </ReduxProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
