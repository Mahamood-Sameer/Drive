import './App.css';
import Header from './Components/Header';
import SideNav from './Components/SideNav';
import ContentPage from './Components/ContentPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router';


function App() {
 
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <div className="app_body">
            <SideNav />
            <Route path="/Drive">
              <Redirect to="/Drive/My Drive"/>
            </Route>
            <Route path='/Drive/:section'>
              <ContentPage />
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
