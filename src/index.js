import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '~/app/store';
import GlobalStyles from './styles/GlobalStyles/GlobalStyles';
import { FusionAuthProvider } from "@fusionauth/react-sdk";
import reportWebVitals from './reportWebVitals';
import { config } from "./config";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles>
        <FusionAuthProvider {...config}>
          <App />
        </FusionAuthProvider>
      </GlobalStyles>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
