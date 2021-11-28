import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const data = useStaticQuery(graphql`
    query HeroQuery {
      site {
        siteMetadata {
          social {
            twitter
            instagram
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const social = data.site.siteMetadata?.social

  return (
    <div data-is-root-path={isRootPath}>
      <header className="global-header">
        <nav className="navbar">
          <div className="global-wrapper flex justify-between items-center">
            <Link className="brand" to="/">{title}</Link>
            <div className="text-center flex text-xl">
              <a className="text-blue-900 hover:text-gray-900" href={`https://twitter.com/${social?.twitter || ``}`}>
                <FaTwitter />
              </a>
              <a className="text-blue-900 hover:text-gray-900 ml-3" href={`https://www.instagram.com/${social?.instagram || ``}`}>
                <FaInstagram />
              </a>
              <a className="text-blue-900 hover:text-gray-900 ml-3" href={`https://github.com/${social?.github || ``}`}>
                <FaGithub />
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="main">
        <div className="global-wrapper">
          {children}
        </div>
      </main>
      <footer className="bg-white py-2">
        <div className="global-wrapper text-center">
          © {new Date().getFullYear()} {title}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
