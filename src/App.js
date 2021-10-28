import "./App.css";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import ContentPage from "./Components/ContentPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth } from "./Firebase";
import { useEffect, useState } from "react";
import Google from "./Components/Google";

function App() {
  const [user, setUser] = useState();

  // Checking for user
  useEffect(() => {
    auth.onAuthStateChanged((data) => {
      if(data){
        setUser(data);
      }
      console.log(user);
    });
  }, [user]);


  return (
    <div className="app">
      {!user ? (
        <Google />
      ) : (
        <BrowserRouter>
          <Header User={user}/>
          <Switch>
            <div className="app_body">
              <SideNav />
              <Route path="/Drive">
                <ContentPage />
              </Route>
            </div>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
