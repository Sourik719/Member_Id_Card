import React from 'react';
import { BrowserRouter, Route,Routes, Switch } from 'react-router-dom';
import MemberDetails from './Member Details';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route exact path="/members/:id" Component={MemberDetails} />
      </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
