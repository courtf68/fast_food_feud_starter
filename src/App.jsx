import * as React from "react";

// IMPORT ANY NEEDED COMPONENTS HERE
import { useState } from "react";
// import Header from "./components/Header/Header";
// import "./Header.css";
import "./components/Header/Header";
import Header from "./components/Header/Header";

import "./components/Instructions/Instructions";
import Instructions from "./components/Instructions/Instructions";

import "./components/Chip/Chip";
import Chip from "./components/Chip/Chip";

//end of additions
import { createDataSet } from "./data/dataset";
import "./App.css";

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
};
// or this!
const { data, categories, restaurants } = createDataSet();

//start my code block
//const [index, setIndex] = React.useState(categories); //ind, state vari|set ind, setter func    delete line if blank

function handleClick() {
  const [index, setIndex] = React.useState(categories);
}

//end

export function App() {
  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* YOUR CODE HERE */}
          {/* map over */}
          {categories.map((str, i) => {
            return <Chip key={i} label={str} />;
            // return <p key={i}> {str} </p>;
          })}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header info={appInfo.title} />
        <Header tagg={appInfo.tagline} />
        <Header des={appInfo.description} />
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {/* YOUR CODE HERE */}
            {/* for (int i =0; i<restaurants; i++) { 
            <p> {restaurants[i]}</p>
            } */}
            {restaurants.map((str, i) => {
              return <Chip key={i} label={str} />;
              // return <p key={i}> {str} </p>;
            })}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions struct={appInfo.instructions} />
        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {/* YOUR CODE HERE */}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            {/* YOUR CODE HERE */}
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
