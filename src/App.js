import React from 'react';
import Products from './components/Products';
// import data from "./data.json";


// idk if this will work to get the data from the .json file. src= https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
// check to make sure this works (make sure data isnt null, that its actually being fetched). they have this code, idk where it shd go tho


// cart instructor makes this into a class component but im gonna try a hook
// THIS WORKS, W/O IMPORTING AND W HEADERS: {}
function App() {  

  return (
    <div className="grid-contatiner">
      <header>
        <a href="/">React page</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products />
          </div>
          <div className="sidebar">sidebar</div>
        </div>
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
