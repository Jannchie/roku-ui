import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { App } from './app';
import { Home } from './Home';
import { Comment } from './Comment';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="comment" element={<Comment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
