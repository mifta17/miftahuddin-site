import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogsPage = ({ data }) => {
  return (
    <Layout pageTitle="Blogs Page">
      <h1>Ini halaman untuk daftar blog</h1>
      {
        data.allMdx.nodes.map(({ id, frontmatter, excerpt }) => (
          <article key={id}>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query BlogsQuery {
    allMdx(
      sort: {order: DESC, fields: frontmatter___date}
      filter: {frontmatter: {type: {eq: "blog"}}}
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          type
        }
        excerpt(pruneLength: 50)
        id
      }
    }
  }
  `

export default BlogsPage