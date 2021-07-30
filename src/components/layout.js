import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Navbar from "./navbar"

import "../styles/global.css"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
          description
        }
      }
    }
  `)

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <Navbar />
      <div className="py-5 px-4">
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="md:col-start-2 md:col-span-4">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Layout