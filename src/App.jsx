import React from 'react';
import Header from './components/Header';
import AdminPage from './Pages/Adminpage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <AdminPage />
      <Footer />
    </div>
  );
}

export default App;
