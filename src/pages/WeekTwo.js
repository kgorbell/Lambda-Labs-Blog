import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const WeekTwo = () => (
  <Layout>
    <Link to="/">Home</Link>
    <h1>Week 2</h1>
    <h3>Individual Accomplishments:</h3>
    <p>Hello!</p>
    <p>The following lists my contributions to the project:</p>
    <p>FRONT END:</p>
    <ul>
      <li></li>
      <ul>
        <li><a href=''>Github</a></li>
        <li><a href=''>Trello</a></li>
      </ul>
      <li></li>
      <ul>
        <li><a href=''>Github</a></li>
        <li><a href=''>Trello</a></li>
      </ul>
      <li></li>
      <ul>
        <li><a href=''>Github</a></li>
        <li><a href=''>Trello</a></li>
      </ul>
      <li></li>
      <ul>
        <li><a href=''>Github</a></li>
        <li><a href=''>Trello</a></li>
      </ul>
    </ul>
    <p>BACK END:</p>
    <ul>
    <li>Deploy GraphQL to Heroku</li>
    <ul>
        <li><a href=''>Github</a></li>
        <li><a href=''>Trello</a></li>
      </ul>
    </ul>

    <h3>Detailed Analysis:</h3>
  </Layout>
)

export default WeekTwo
