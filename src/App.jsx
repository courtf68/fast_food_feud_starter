import * as React from "react";

// IMPORT ANY NEEDED COMPONENTS HERE
// import { useState } from "react";

import "./components/Header/Header";
import Header from "./components/Header/Header";

import "./components/NutritionalLabel/NutritionalLabel";
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel";
import { NutritionalLabelFact } from "./components/NutritionalLabel/NutritionalLabel";

import "./components/Instructions/Instructions";
import Instructions from "./components/Instructions/Instructions";

import "./components/Chip/Chip";
import Chip from "./components/Chip/Chip";

//end of additions
import { createDataSet } from "./data/dataset";
import "./App.css";
import { render } from "@testing-library/react";

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

//end

export function App() {
  const [choose, setCatChoice] = React.useState(null); //og categ
  const [selIt, setselChoice] = React.useState(null); //nutri item
  const [RestIt, setResChoice] = React.useState(null); //res item
  function clickd(str) {
    setCatChoice(str);
  }
  function clicked(str) {
    setResChoice(str);
  }
  function clickedMenu(str) {
    setselChoice(str);
  }

  //   //onclick to update state
  //    var currentMenuItems = data.filter(item)=> {
  //   return item.food_category = choose[categories] + RestIt[restaurants];
  //   //chip render ig
  //  }
  var currentMenuItems = data.filter((item) => {
    return item.restaurant === RestIt && item.food_category === choose;
  });
  // render()
  //  currentMenuItems.map((strrs,i)) => {
  //    <Chip  key={i}
  //  label={str}/>
  // }

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* YOUR CODE HERE */}
          {/* map over */}
          {categories.map((str, i) => {
            return (
              <Chip
                key={i}
                label={str}
                isActive={str === choose}
                clicky={() => {
                  clickd(str);
                }}
              />
            );
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
            {restaurants.map((strs, i) => {
              return (
                <Chip
                  key={i}
                  label={strs}
                  isActive={strs === RestIt}
                  clicky={() => {
                    clicked(strs);
                  }}
                />
              );
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
            {currentMenuItems.map((menuI, i) => {
              return (
                <Chip
                  key={i}
                  label={menuI.item_name}
                  isActive={selIt && selIt.item_name === menuI.item_name}
                  clicky={() => {
                    clickedMenu(menuI);
                  }}
                />
              );
            })}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            {/* YOUR CODE HERE ... render */}
            <h4 className="item-name"></h4>
            {selIt ? <NutritionalLabel item={selIt} /> : null}
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
