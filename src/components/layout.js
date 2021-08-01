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
    <div className="flex flex-col min-h-screen transition duration-300 ease-in-out bg-white dark:bg-gray-900 dark:text-white">
      <main>
        <Helmet>
          <html lang="en" />
          <title>{pageTitle} | {data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
        </Helmet>
        <div className="py-5 px-4">
          <div className="grid grid-cols-1 md:grid-cols-6">
            <div className="md:col-start-2 md:col-span-4">
              <Navbar />
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout