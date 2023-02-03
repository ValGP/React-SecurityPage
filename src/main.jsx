import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { SecurityPage } from './SecurityPage'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <SecurityPage></SecurityPage>
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
