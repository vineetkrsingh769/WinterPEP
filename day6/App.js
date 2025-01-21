import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Timer from './components/Timer';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Timer</h2>
        <Timer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
