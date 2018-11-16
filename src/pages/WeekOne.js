import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import components from '../images/src-folder-components.png'
import stylesFolder from '../images/styles-folder.png'

const WeekOne = () => (
  <Layout>
    <Link to="/">Home</Link>
    <h1>Week 1</h1>
    <h3>Individual Accomplishments:</h3>
    <p> Most of my work this week was directed towards establishing a styling template for our React application that will allow for a fluid user experience. In order to allow for an easily manages styles library, I installed less into our project and included separate files for variables, and mixins. When applying these styled to our various components, we came to an agreement on a structure for each webpage and applied that to all the components we built. My Components contribution include the header, footer, navigation icon, and jumbotron (located on the landing page).</p>
    <p> In addition to working on the Front-End, I took some time this week in order to learn about the GraphQL Yoga database. After reviewing how my fellow team members built out their end points, I assisted in getting our database deployed.</p>
    <p>The following lists my contributions to the project:</p>
    <p>FRONT END:</p>
    <ul>
      <li>Landing Page JumboTron</li>
      <ul>
        <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/pull/21'>Github</a></li>
        <li><a href='https://trello.com/c/s3qt0l1J/38-landing-page-jumbotron'>Trello</a></li>
      </ul>
      <li>Header</li>
      <ul>
        <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/pull/1'>Github</a></li>
        <li><a href='https://trello.com/c/1TpcIHvo/40-header-error'>Trello</a></li>
      </ul>
      <li>SignUp-Signin Pages</li>
      <ul>
        <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/pull/6'>Github</a></li>
        <li><a href='https://trello.com/c/shg08Z9P/22-signup-page'>Trello</a></li>
      </ul>
      <li>Initializing React Project</li>
      <ul>
        <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/pull/16'>Github</a></li>
        <li><a href='https://trello.com/c/awqaotjM/20-initialize-the-react-project'>Trello</a></li>
      </ul>
    </ul>
    <p>BACK END:</p>
    <ul>
    <li>Deploy GraphQL to Heroku</li>
    <ul>
        <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/pull/20'>Github</a></li>
        <li><a href='https://trello.com/c/U6ttXUFH/12-deployed-to-the-web'>Trello</a></li>
      </ul>
    </ul>

    <h3>Detailed Analysis: Initializing the Front-End</h3>
    <p>When instantiating a React app of any size, it is important to take the time and care to devise a well thoughtout plan on how your application will be structured. And so, in order to ensure for easily readable code, we elected to install react-router for a fluid map of webpages, and LESS for easy manageable styling. React-router was easily implemented into our component structure, but LESS proved a more challenging learning experience. After attempting to install LESS via documentation found on the internet, I was left with an 'ejected' version of our project that caused errors with my react-scritps. However, after reaching out and receiving instruction from a fellow student, I was able scrap what I was working on and start fresh with a much easier implementation of LESS via the less-watch-compiler.</p>
    <img src={components} alt='Components Structure'/>
    <img src={stylesFolder} alt='Styles structure'/>

    <h3>Weekly Reflection:</h3>
    <p style={{fontWeight:'bold'}}>Reflect on your experience as a team. What did you do to help the team solidify as a group? What did you do that you now realize caused friction in this process?</p>
    <p>After discussing our strengths and weaknesses, each of us seemed to find a specialty that made sense for each of us to fa. This also allowed us to easily jump into work without any major complications. And although there has yet to be an appointed team leader, our continued communication and willingness to concede has bode well for our progress as a team. When looking back on the past week, it is hard to see any clear points where I may have caused some friction in our group. On the other hand, some of my weaknesses as a team member quickly became apparent to me whenever a difficult task was at hand. However, Learning from these weaknesses in communication is exactly how I can better myself as a professional.</p>
  </Layout>
)

export default WeekOne
