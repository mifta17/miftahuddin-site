import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import NotFoundPage from "../404";

const BlogPost = ({ data }) => {
  return (
    data.mdx == null ? NotFoundPage : (
      <Layout pageTitle={data.mdx.frontmatter.title}>
        <article key={data.mdx.id}>
          <div className="text-center mb-5">
            <h2 className="text-3xl">{data.mdx.frontmatter.title}</h2>
            <p className="text-sm">{data.mdx.frontmatter.date}</p>
            <div>
              {data.mdx.frontmatter.tags.map((tag) => (
                <span className="px-1 text-sm font-bold">#{tag}</span>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-6">
            <div className="col-span-4 col-start-2 text-xl">
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </div>
          </div>
        </article>
      </Layout>
    )
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: {eq: $id}, frontmatter: {draft: {in: false}}) {
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
