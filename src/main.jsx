import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import Routers from "./router/Router.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>,
)
