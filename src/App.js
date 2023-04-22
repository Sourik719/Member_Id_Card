import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MemberDetails from './Member Details';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <Router>
      <Header/>
    <div className="App">
      <Routes>
      <Route path="/members/:id" Component={MemberDetails} />
      </Routes>
    </div>
    <Footer/>
  </Router>
  );
}

export default App;
