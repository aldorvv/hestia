import React from 'react';
import RouteTree from './components/RouteTree/RouteTree'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container d-flex align-items-center flex-column">
          <BrowserRouter>
              <RouteTree/>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
