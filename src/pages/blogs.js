import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"

const BlogsPage = ({ data }) => {
  return (
    <Layout pageTitle="Blogs Page">
      <h2 className="font-bold text-2xl mb-5">Blog Post</h2>
      <section>
        {
          data.allMdx.nodes.map(({ id, frontmatter, excerpt, slug }) => (
            <article key={id} className="hover:shadow-md hover:bg-gray-200 rounded-lg p-4">
              <p className="text-sm">{frontmatter.date}</p>
              <h3 className="font-bold text-2xl">
                <Link to={`/blog/${slug}`} className="font-bold inline-block mb-3 hover:text-green-600">
                  {frontmatter.title}
                </Link>
              </h3>
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