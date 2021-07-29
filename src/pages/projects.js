import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const PeojectsPage = ({ data }) => {
  return (
    <Layout pageTitle="Projects Page">
      <h1>Ini halaman untuk daftar Project</h1>
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
  query ProjectsQuery {
    allMdx(
      sort: {order: DESC, fields: frontmatter___date}
      filter: {frontmatter: {type: {eq: "project"}}}
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

export default PeojectsPage