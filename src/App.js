import React from 'react';
import Header from './features/Header/Header'
import Home from './features/Home/Home';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
      </aside>
    </>
  );
}

export default App;
