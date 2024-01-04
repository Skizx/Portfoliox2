import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ThemeContextWrapper from './context/theme-wrapper.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextWrapper>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeContextWrapper>,
)
