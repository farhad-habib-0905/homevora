// src/pages/NotFound.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <main style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <h1>404</h1>
      <p>No match for <code>{pathname}</code></p>
      <Link to="/" className="btn">Go Home</Link>
    </main>
  );
}
