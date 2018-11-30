import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Query from '../images/Week3/query.png'
import mapRecipes from '../images/Week3/map-recipes.png'
import linkImg from '../images/Week3/link.png';
import recipes from '../images/Week3/recipes.png';
import recipe from '../images/Week3/recipe.png';

const WeekThree = () => (
    <Layout>
      <Link to="/">Home</Link>
      <h1>Week 3</h1>
      <h3>Individual Accomplishments:</h3>
      <p>This week marked the halfway point for our project here at Lambda. This of course means that most of the work each of us had been working on for the past few weeks would be coming together. Although all four of us have specialized on various aspects of our website, we would all need to work together in order to allow our website to work seamlessly together. Therefore, most of our time this week was spent problem-solving as a team.</p>
      <p>The main issue we had to solve this week was displaying our data from the database onto our website. Since we had been using dummy-data to build out our components, most of our code had to be re-factored to allow for user-specific data to be displayed. Once this conflict had been resolved, we were finally able to test and ensure that all of our components were working together.</p>
      <p>My work this week can be seen in the header, recipes page, and single recipe card page.</p>
      <p>The following lists my contributions to the project:</p>
      <ul>
        <li>Header Content / Functionality | FE</li>
        <ul>
          <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/pull/42'>Github</a></li>
          <li><a href='https://trello.com/c/JmEmiQsF/69-landing-content-header-functionality'>Trello</a></li>
        </ul>
        <li>Header Styling Fix | FE</li>
        <ul>
          <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/pull/52'>Github</a></li>
          <li><a href='https://trello.com/c/PAC7zW84/80-header-styling-fix'>Trello</a></li>
        </ul>
        <li>Get Recipe Query | FE &amp; BE</li>
        <ul>
          <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/pull/54'>Github</a></li>
          <li><a href='https://trello.com/c/ex35Y6np/85-user-specific-recipe-query'>Trello</a></li>
        </ul>
        <li>Single Recipe View Page | FE</li>
        <ul>
          <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/pull/48'>Github</a></li>
          <li><a href='https://trello.com/c/97TdOQfj/84-single-recipe-view-page-data'>Trello</a></li>
        </ul>
        <li>Single Recipe View Data | FE &ap; BE</li>
        <ul>
          <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/pull/57'>Github</a></li>
          <li><a href='https://trello.com/c/97TdOQfj/84-single-recipe-view-page-data'>Trello</a></li>
        </ul>
      </ul>
  
      <h3>Detailed Analysis: Single Recipe View Data</h3>
      <p>Once our group successfully accessed our user-specific data, we were able to work separately to fix the bugs in each page's component. I was tasked with creating a card component and specific webpage for each recipe that belonged to a user.</p>
      <p>And so, the first step I had to make was to understand the data sent to us. Therefore, I created a query which accessed every necessary field of a recipe and all of its sub-data types (schedule, instructions, and ingredients). Once I assesssed how my data was structured I was able to discern what I needed to do to print my data on to the screen.</p>
      <img src={Query} alt='1' />
      <p>In the instances where other data types are attached to the recipe data type, I needed to map through each of these in order to access each instance of the data type and it's sub fields. However, since I didn't need to access this information until I was on a recipe's specific webpage, I needed to pass this information down as props to the via a link on the recipe's card. The following 2 pictures show how I initially create a card component for each recipe, and then subsequently send the recipe's data to it's specific webpage.</p>
      <img src={mapRecipes} alt='2'/>
      <img src={linkImg} alt='3'/>
      <p>From there, I was able to easily access and display any data that pertained to my user. The important consideration we had while we were designing our data was to allow it to be easily accessible in many ways. And so, since we created data types with many-to-many, and one-to-many connections, the data that can be accessed and edited on the Recipes, and Recipe-specific webpages will persist can be accessed in different ways.</p>
      <img src={recipes} alt='4' />
      <img src={recipe} alt='5' />

      <h3>Weekly Reflection</h3>
      <p>This week, our task was to add responsive functionality to our webage as well as successfully implement the majority of features of our application's specifications. This <a href='https://lambda-cookbook.netlify.com/'>link</a> will take you to our deployed site where our features can be tested. Once a user logs in, they will be directed to our home screen. The first step is to add a recipe to their account. Our scraper work best for the recipe databases <a href='https://allrecipes.com'>AllRecies</a>, and <a href='https://geniuskitchen.com'>GeniusKitchen</a>. Once a user pastes a specific recipe into the scraper and load it in (search button), a preview of the recipe will load and the user will have the option to schedule their meal if they would like to. Fron there, a user can view their recipes under the 'Recipes' tab, and view specific recipe data by clicking on its image. The calendar page allows a user to manage their scheduled recipes, and the grocery list, will compile all the scheduled recipes ingredients and into a groery list.</p>
    </Layout>
  )
  
  export default WeekThree
  