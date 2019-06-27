import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <h2>Pop Up PDX</h2>
    <div className="popUpList">
      <ul>
        <a href="#">
        <li>
          <h3>Pop Up #1</h3>
          <img src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
        </li>
        </a>
        <a href="#">
        <li>
          <h3>Pop Up #2</h3>
          <img src="https://images.unsplash.com/photo-1501262139015-998ac3d1e0be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
        </li>
        </a>
        <a href="#">
        <li>
          <h3>Pop Up #3</h3>
          <img src="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
        </li>
        </a>
      </ul>
    </div>
    </div>
  );
}

export default App;
