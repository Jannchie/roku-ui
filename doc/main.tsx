import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { App } from './app'
import { router } from './router'
import { RokuProvider, defaults } from '../src'

import './assets/PrismJS.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

defaults.border = true

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RokuProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<App />}
          >
            {
              router.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </RokuProvider>
  </React.StrictMode>,
)
