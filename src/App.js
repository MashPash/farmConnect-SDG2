import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FarmerDashboard from './components/FarmerDashboard';
import ConsumerDashboard from './components/ConsumerDashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/farmer-dashboard" component={FarmerDashboard} />
          <Route path="/consumer-dashboard" component={ConsumerDashboard} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
