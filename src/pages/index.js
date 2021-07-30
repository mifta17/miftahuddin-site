import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"

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
    <main className="absolute w-full h-full flex items-center justify-center">
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-6 px-3">
        <div className="md:col-start-2 md:col-span-4 text-center">
          <StaticImage
            width={150} alt="Profile Picture" className="rounded-full mb-5"
            src="../images/profile.jpg"
          />
          <h1 className="font-bold text-3xl">Halo, Saya Miftahuddin</h1>
          <p>Saya orangnya gabut makanya saya buat beginian.</p>
          <div className="mt-3">
            <Link className="font-bold text-gray-600 hover:text-blue-400" to="/blogs">#Blogs</Link>
            <span> . </span>
            <Link className="font-bold text-gray-600 hover:text-blue-400" to="/projects">#Projects</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
