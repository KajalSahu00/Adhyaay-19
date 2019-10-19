import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';


import Home from './home';
import Events from './events';


function App() {
  return (
    <>
      <BrowserRouter>
        <Route path='/' exact component={Home} />
        <Route path='/events' exact component={Events} />
      </BrowserRouter>
    </>
  );
}

export default App;
