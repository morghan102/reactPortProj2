import React, { useState, useEffect } from 'react';
import Products from './components/Products';
// import data from "./data.json";


// idk if this will work to get the data from the .json file. src= https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app
// check to make sure this works (make sure data isnt null, that its actually being fetched). they have this code, idk where it shd go tho


// cart instructor makes this into a class component but im gonna try a hook
// THIS WORKS, W/O IMPORTING AND W HEADERS: {}
function App() {  

// lifting state up for the products
  const [products, setProducts]=useState([]);
  // usestate() takes the initial state as an argument and returns an array with two items. The first item is a variable containing the state, which you will often use in your JSX. The second item in the array is a function that will update the state.

  // i gave up on the json data AGGGGHHHHHAGSHGJGDJAS
  const getData=()=>{
    fetch('data.json'
    ,
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setProducts(myJson);
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="grid-contatiner">
      <header>
        <a href="/">React page</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
