import React from "react";

import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import Header from './Header'

function App() {
  return (
    <div className='container'>
        <Header/>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
