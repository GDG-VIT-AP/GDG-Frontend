import React from 'react';
import Header from './components/Header';
import Main from './components/Adminpage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

