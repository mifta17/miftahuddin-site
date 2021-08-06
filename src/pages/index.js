import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import ThemeToggle from "../components/themeToggle"


const IndexPage = () => {
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
    <main className="absolute w-full h-full flex items-center justify-center dark:text-white transition-all duration-300">
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <div className="fixed md:right-10 top-10 right-5" >
        <ThemeToggle />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 px-3">
        <div className="md:col-start-2 md:col-span-4 text-center">
          <StaticImage
            width={150} alt="Profile Picture" className="rounded-full mb-5"
            src="../images/profile.jpg"
          />
          <h1 className="font-bold text-3xl">Halo, Saya Miftahuddin</h1>
          <p>Saya orangnya gabut makanya saya buat beginian.</p>
          <div className="mt-3">
            <Link className="font-bold hover:underline" to="/blog">#Blogs</Link>
            <span> . </span>
            <Link className="font-bold hover:underline" to="/project">#Projects</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
