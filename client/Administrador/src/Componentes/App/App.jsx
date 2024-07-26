
import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Main from '../Main/Main';
import Detail from '../Main/Detail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/product/" render={ (routeProps) => <Main {...routeProps} />}/>
        <Route path="product/:id" render={ (routeProps) => <Detail {...routeProps} />} />
        <Route path="products/:id/edit" render={ (routeProps) => <Update {...routeProps} updateProducts={updatePerson} />}/>
      </BrowserRouter>
    </div>
  );
}
export default App;
