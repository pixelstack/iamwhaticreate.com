import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './reset.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div
    className='wrapper'
  >
    <Helmet
      title="I AM WHAT I CREATE - Talking shop, exploring the lives of creatives and entrepreneurs worldwide"
      meta={[
        { name: 'description', content: 'Talking shop, exploring the lives of creatives and entrepreneurs worldwide' },
        { name: 'keywords', content: 'creatives, interviews, creative interviews, podcast, designers, developers, entrepreneur' },
      ]}
    />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
