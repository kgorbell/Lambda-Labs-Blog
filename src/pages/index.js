import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <Link to="/WeekOne/">Week 1</Link>
    <Link to='/WeekTwo/'>Week 2</Link>
    <Link to='/WeekThree/'>Week 3</Link>
    <Link to='/WeekFour/'>Week 4</Link>
    <Link to='/WeekFive/'>Week 5</Link>
  </Layout>
)

export default IndexPage
