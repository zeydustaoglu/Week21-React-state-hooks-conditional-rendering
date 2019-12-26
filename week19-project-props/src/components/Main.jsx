import React from "react";
import Sidebar from './Sidebar';
import Jumbotron from './Jumbotron';
import Content from './Content';
import Products from './Products';
import Team from './Team';


function Main() {
  return( 
    <div>
      <Jumbotron/>   
 
      <div>    
        <div className="row">
          <div class="col-md-8 blog-main">
            <Content/>
    
          </div>   
 
          <aside class="col-md-4 blog-sidebar">
            <Sidebar/>
          </aside> 
        </div>   
        <Products/>  
        <Team/>

      </div>
  </div> );
}

export default Main;
