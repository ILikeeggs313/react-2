import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import MenuItem from "./MenuItem";
import Snack from "./FoodItem";
import NewItemForm from "./NewItemForm";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getMenuItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setSnacks(snacks);
      setIsLoading(false);
    }
    getMenuItems();
  }, []);
  //we use some axios here to get the API from the API.js
  async function addItem(data){
    await SnackOrBoozeApi.addMenuItem(data);
    let snacks = await SnackOrBoozeApi.getSnacks();
    let drinks = await SnackOrBoozeApi.getDrinks();
    setDrinks(drinks);
    setSnacks(snacks);
  }


  // if (isLoading) {
  //   return <p>Loading &hellip;</p>;
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu snacks={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu menuItems={drinks} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <MenuItem menuItems={drinks} cantFind="/drinks" />
            </Route>

            <Route path="/add">
              <NewItemForm addItem={addItem}/>
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
