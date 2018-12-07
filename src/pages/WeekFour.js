import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

//images
import Graph from '../images/Week4/Graph.png';


const WeekFour = () => (
    <Layout>
      <Link to="/">Home</Link>
      <h1>Week 4</h1>
      <h3>Individual Accomplishments:</h3>
      <p>Preliminaries: The following <a href='https://youtu.be/tjyMTX9h_3A'>link</a> will take you to my whiteboarding session on the 'product of all other numbers.' Additionally, the graph below details my contributions to the project this week.</p>
      <img src={Graph} alt='graph'/>
      <p>Week 4 of our project this week was to complete our application's functionality and deliver a professional looking product. For us this was a large hill to climb that included tying up many loose ends. Fortunately, we were able to work simultaneously to improve functionality and design by constantly communicating, and dividing and conquering. In order to minimize merge conflicts, and hindering each other's progress, we always made sure that our work would not overlap anybody else's work. This was especially important when someone was working on CSS. Since we are 4 people with 4 different views on how to get things done, minor errors did pop up. We were always quick to address these issues so that no other complications would arise from them. </p>
      <p>Although we weren't able to deliver a fully professional and functional website by the end of the week, we did make many strides that have put us in a great position before next week.</p>
      <p>The following lists my contributions to the project:</p>
      <ul>
        <li>Single Recipe View Page style &amp; functionality | FE</li>
        <ul>
          <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/pull/68'>Github</a></li>
          <li><a href='https://trello.com/c/1dLmW1zK/95-single-recipe-view-page-styles-functionality'>Trello</a></li>
        </ul>
        <li>Header Style &amp; functionality | FE</li>
        <ul>
          <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/pull/72/'>Github</a></li>
          <li><a href='https://trello.com/c/Fg2jC6Ms/101-header-style-functionality'>Trello</a></li>
        </ul>
        <li>Delete Recipe Mutation | BE</li>
        <ul>
          <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/pull/75'>Github</a></li>
          <li><a href='https://trello.com/c/IhZxhMnK/108-delete-recipe-mutation'>Trello</a></li>
        </ul>
        <li>Grocery List Styles and Functionality | FE</li>
        <ul>
          <li><a href='https://trello.com/c/IhZxhMnK/108-delete-recipe-mutation'>Github</a></li>
          <li><a href='https://trello.com/c/SDlQjKar/102-grocery-list-styles'>Trello</a></li>
        </ul>
      </ul>
  
      <h3>Detailed Analysis: Grocery List Styles &amp; functionality.</h3>
      <p>The first step I took when styling the grocery list page was to break it down into each component and complete it's functionality and then style. The first step was to complete the calendar styling. This styling took a little bit longer than others since it's html is imported via a node-odule. Therefore, I had to inspect each element in order to understand how the CSS was designed, and then adjust from there.</p>
      <p>After I completed the calendar's styling, I had to move on to the grocery list. A previous group member had already added in functionality in order to generate a grocery list from a user's input. However, there were a feew tweaks that I wanted to make to this functionality. For instance, I wanted to make sure that the date range for the generated grocery list would display the correct date range, rather than changing when the user selects the date range. Therefore, I had to adjust the state as well as the previously created functions by my group members. This entailed a careful examination of someone else's code so as to not break any functionality. I also added a section to the grocery list that allowed users to see all of the recipes that they had scheduled for their selected date range as well as a link to that recipe's website. Once this was completed I was able to finish up the styling and make any other minor adjustments that I saw fit.</p>
    </Layout>
  )
  
  export default WeekFour