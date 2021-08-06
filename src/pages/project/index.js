import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const PeojectsPage = ({ data }) => {
  const nodes = data.allMdx.nodes

  return (
    <Layout pageTitle="Project Post">
      { 
        nodes.length === 0 ? 
        <p className="text-center text-xl mt-10">Belom ada hehehe &#128517;</p> : 
        nodes.map(({ id, frontmatter, excerpt }) => (
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
      filter: {frontmatter: {type: {eq: "PROJECT"}}}
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          tags
          featuredimage
          description
        }
        excerpt(pruneLength: 50)
        id
      }
    }
  }
  `

export default PeojectsPage