/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Blob from './blob'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  function returnBlobs(){
    const random = Math.floor(Math.random()* 3)
    switch(random){
      case 0:
        return(
          <>
            <div><Blob shape="one" style="one"/></div>
            <div><Blob shape="two" style="two"/></div>
            <div><Blob shape="three" style="three"/></div>
          </>
        )
      case 1:
        return(
          <>
            <div><Blob shape="one" style="three"/></div>
            <div><Blob shape="two" style="one"/></div>
            <div><Blob shape="three" style="two"/></div>
          </>
        )
      case 2:
        return(
          <>
            <div><Blob shape="one" style="three"/></div>
            <div><Blob shape="two" style="two"/></div>
            <div><Blob shape="three" style="one"/></div>
          </>
        )
    }
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      {returnBlobs()}
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
