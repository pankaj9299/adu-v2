import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/output.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
