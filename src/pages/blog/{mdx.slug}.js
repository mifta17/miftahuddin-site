import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";

const BlogPost = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article key={data.mdx.id}>
        <div className="text-center mb-5">
          <h2 className="text-3xl">{data.mdx.frontmatter.title}</h2>
          <div>
            {data.mdx.frontmatter.tags.map((tag) => (
              <span className="px-1">#{tag}</span>
            ))}
          </div>
          <p>{data.mdx.frontmatter.date}</p>
        </div>
        <div>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
      }
      body
      id
    }
  }
`;

export default BlogPost;
