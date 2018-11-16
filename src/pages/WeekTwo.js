import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import graph from '../images/graph-11-16.png';
import stripeCheckout from '../images/stripe-checkout.png';
import dataModel from '../images/subscription-data-model.png';
import StripeFE from '../images/StripeFE.png';


const WeekTwo = () => (
  <Layout>
    <Link to="/">Home</Link>
    <h1>Week 2</h1>
    <h3>Individual Accomplishments:</h3>
    <p>This week my whiteboarding challenge involved the nth Fibonacci series. My task was to create a less time complex algorithm for finding the nth number in the fibonacci series. The following <a href='https://files.slack.com/files-pri/T4JUEB3ME-FE549H3DX/download/katiefibonacci.mp4'>link</a> will download the video for my solution. Additionally, the graph below indicates this weeks contributions to the project. My handle is the 3rd on the list.</p>
    <img src={graph} alt='GitHub contribution graph'/>
    <p>Our challenge this week was to implement 2 or more API's into our project, as well as connect our front-end to the back-end. In addition to these tasks, we worked on further building out our user interface and working webpages. Thus, I worked on implementing the Stripe platform for processing payment requests as well as fixing other issues across our application. Unfortunately, lots of progress this week was stalled due to the challenging task of implementing our API's. After spending multiple hours researching how to integrate Stripe with our database, I was at a standstill on how to move forward due to the lack of documentation. However, after taking the time to learn about our Prisma database and working alongside another group member, we were able to successfullly integrate Stripe into our database and user interface. </p>
    <p>The following lists my contributions to the project:</p>
    <p>FRONT END:</p>
    <ul>
      <li>Bug Fix: calendar API, styling</li>
      <ul>
        <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/tree/calendar-style-fixFE'>Github</a></li>
        <li><a href='https://trello.com/c/LDnr9czn/65-calendar-api-bug-fixes'>Trello</a></li>
      </ul>
      <li>Styling, UI updates</li>
      <ul>
        <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/tree/styling-UI-fixes'>Github</a></li>
        <li><a href='https://trello.com/c/lpACMr3A/56-ui-changes-error-fixes'>Trello</a></li>
      </ul>
      <li>Stripe Integration</li>
      <ul>
        <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/tree/stripe-integration'>Github</a></li>
        <li><a href='https://trello.com/c/SOV74CZA/55-stripe-integration'>Trello</a></li>
      </ul>
    </ul>
    <p>BACK END:</p>
    <ul>
    <li>Stripe Integration</li>
    <ul>
        <li><a href='https://github.com/Lambda-School-Labs/Labs8-Cookbook/tree/stripe-integration'>Github</a></li>
        <li><a href='https://trello.com/c/SOV74CZA/55-stripe-integration'>Trello</a></li>
      </ul>
    </ul>

    <h3>Detailed Analysis: Stripe Integration</h3>
    <p>After my initial reserach into the Stripe platform, it became clear to me that implementing stripe-checkout would be the smartest approach for our platform. Since it was my first time implementing stripe, this approach would allow us to use a pre-built form that would overlay our application and process the customer's payment information like so:</p>
    <img src={stripeCheckout} alt='stripe-checkout platform' style={{height:'300px'}}/>
    <p>Before I could test that stripe was successfully installed on the front-end, I had to add it into our database as well. And so, the first step was to build out a data model for a subscription which would be unique to the user it is associated with. This data model would need to include type(monthly, annual, etc...), amount, user, and a charge(a receipt which would be returned after the payment is processed).</p>
    <img src={dataModel} alt='data model for a subscription'/>
    <p>Once the data model was completed, a createSubscription mutation had to be added to communicate with the front-end. Thus, the last step was to add a request on the front-end to allow for the stripe-checkout model to query our back-end and create a subscription to be added to a specific user.</p>
    <img src={StripeFE} alt='Stripe FE query' style={{height:'300px'}}/>

    <h3>Weekly Reflection</h3>
    <p>This week we were tasked with implementing multiple APIs into our project, which provided us with much more challenging tasks than the previous week. Thus we were forced to rely on the help of our teammembers to help us push through any errors we encountered. Since I had spent most of my time working on the front end, I was not prepared to fully integrate Stripe into our backend. Therefore, my team member Vu had to give me a crash course on how to work with both GraphQL Yoga and Prisma in order to get a user's input on the front-end porcessed into our database. Once this was completed, I was able to jump in and resolve some conflicts that another teammember was experiencing on the front end. Overall, we were able to play to our strengths and weaknesses in order to resolve problems to tasks that stretched out of our comfort zone.</p>
    <p>The following links take you to our deployed application where you can test out <a href='https://lambda-cookbook.netlify.com/'>Auth0</a>, and our 2 API's: <a href='https://lambda-cookbook.netlify.com/home/calendar'>react-big-calendar</a>, and <a href='https://lambda-cookbook.netlify.com/home/settings'>stripe</a>.</p>
  </Layout>
)

export default WeekTwo
