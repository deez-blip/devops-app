// src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Bienvenue dans mon App</h1>
      <nav>
        <Link to="/about">À propos</Link>
      </nav>

      <section style={{ marginTop: '2rem' }}>
        <h2>Compteur</h2>
        <p data-cy="counter-value">Vous avez cliqué {count} fois</p>
        <button data-cy="inc-button" onClick={() => setCount(c => c + 1)}>
          Cliquez ici
        </button>
      </section>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>À propos</h2>
      <p>Ceci est la page à propos.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}