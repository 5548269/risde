import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Test from './pages/Test';
import Results from './pages/Results';
import TypeDetails from './pages/TypeDetails';
import Resources from './pages/Resources';
import About from './pages/About';
import SavedResults from './pages/SavedResults';
import './Layout.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/results" element={<Results />} />
            <Route path="/type/:id" element={<TypeDetails />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/saved-results" element={<SavedResults />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;