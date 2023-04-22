import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MemberDetails from './Member Details';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/members/:id" Component={MemberDetails} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
