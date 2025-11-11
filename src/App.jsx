// src/App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NotFound from './pages/NotFound';
import routes from './routes';

export default function App() {
  return (
    <div>
      <Routes>
        {routes.map(({ path, element }, idx) => (
          <Route key={idx} path={path} element={element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
