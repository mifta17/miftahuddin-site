import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"

const BlogsPage = ({ data }) => {
  return (
    <Layout pageTitle="Blogs Page">
      <h1>Ini halaman untuk daftar blog</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          data.allMdx.nodes.map(({ id, frontmatter, excerpt, slug }) => (
            <article key={id} className="shadow-md rounded-lg p-4 bg-white">
              <h2>
                <Link to={`/blog/${slug}`} className="font-bold inline-block mb-3 hover:text-green-600">
                  {frontmatter.title}
                </Link>
              </h2>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </article>
          ))
        }
      </section>
    </Layout>
  )
}

export const query = graphql`
  query BlogsQuery {
    allMdx(
      sort: {order: DESC, fields: frontmatter___date}
      filter: {frontmatter: {type: {eq: "BLOG"}}}
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        excerpt(pruneLength: 50)
        id
        slug
      }
    }
  }
  `

export default BlogsPage