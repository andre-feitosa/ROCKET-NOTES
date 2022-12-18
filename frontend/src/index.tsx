import React from 'react';
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals';
import { Rotas } from './routes';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'
import { ToastContainer } from 'react-toastify';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Rotas/>
      </PersistGate>
    </Provider>
    <ToastContainer/>
  </React.StrictMode>
);

reportWebVitals();
