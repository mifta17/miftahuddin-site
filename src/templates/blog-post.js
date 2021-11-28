import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Disqus } from 'gatsby-plugin-disqus';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        {post.frontmatter.github ? (
          <a href={post.frontmatter.github} className="px-4 py-3 rounded-md border border-gray-200 hover:bg-gray-200">Github</a>
        ) : ''}
        {post.frontmatter.demo ? (
          <a href={post.frontmatter.demo} className="ml-3 px-4 py-3 rounded-md border border-gray-200 hover:bg-gray-200">Demo</a>
        ) : ''}
        <Disqus
          config={{
            url: data.site.siteMetadata?.siteUrl + post.fields.slug,
            identifier: post.id,
            title: post.frontmatter.title,
          }}
        />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }, frontmatter: {draft: {in: false}}) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        github
        demo
      }
    }
  }
`
