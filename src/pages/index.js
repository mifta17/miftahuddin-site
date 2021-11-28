import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p className="text-center text-xl">
          No blog posts found.
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4">
        {posts.map(post => {
          const image = getImage(post.frontmatter.thumbnail)
          const title = post.frontmatter.title || post.fields.slug
          return (
            <article
              key={post.fields.slug}
              className="post-list-item md:flex"
              itemScope
              itemType="http://schema.org/Article"
            >
              <GatsbyImage className="thumbnail w-full md:w-auto" image={image} alt={post.frontmatter.title} />
              <div className="px-4 py-3 md:flex-1 flex flex-col justify-between">
                <section className="post-item-body">
                  <h2 className="post-item-header">
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <p className="text-sm"
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
                <section className="post-item-footer">
                  <small className="text-xs">{post.frontmatter.date}</small>
                </section>
              </div>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt(pruneLength: 100)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          thumbnail {
            childImageSharp {
              gatsbyImageData(formats: AUTO)
            }
          }
          description
        }
      }
    }
  }
`
