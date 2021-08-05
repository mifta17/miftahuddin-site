import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby";

const BlogsPage = ({ data }) => {
  return (
    <Layout pageTitle="Blogs Page">
      <h2 className="font-bold text-2xl mb-5">Blog Post</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.allMdx.nodes.map(({ id, frontmatter, excerpt, slug }) => (
          <article
            key={id}
            className="rounded-lg p-4 shadow-lg dark:bg-gray-800 relative"
          >
            <span className="text-xs mb-3 inline-block">
              {frontmatter.date}
            </span>
            <h3>
              <Link
                to={`blog/${slug}`}
                className="text-2xl mb-3 font-bold inline-block hover:text-blue-400"
              >
                {frontmatter.title}
              </Link>
            </h3>
            <p className="mb-10">{frontmatter.description ? frontmatter.description : excerpt}</p>
            <div className="absolute bottom-0 my-5">
              {frontmatter.tags.map((tag) => (
                <span className="inline-block mr-3">#{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogsQuery {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "BLOG" } } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          featuredimage
          tags
          description
        }
        excerpt(pruneLength: 50)
        id
        slug
      }
    }
  }
`;

export default BlogsPage;
