import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AllRoutes from './routes/AllRoutes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="d-flex flex-column min-vh-100">
    <Header/>
    <main className="flex-fill">
    <AllRoutes/>
    </main>
    <Footer/>
    </div>
    </>
  );
}

export default App;
