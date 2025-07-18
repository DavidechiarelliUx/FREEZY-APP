import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux'
import store from "./redux/store"



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>
)
