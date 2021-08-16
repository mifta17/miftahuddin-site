import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { Link } from "gatsby";

const BlogsPage = ({ data }) => {
  const nodes = data.allMdx.nodes;

  return (
    <Layout pageTitle="Blog Post">
      <h2 className="font-bold text-2xl mb-5">Blog Post</h2>
      {nodes.length === 0 ? (
        <p className="text-center text-xl mt-10">Belom ada hehehe &#128517;</p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {nodes.map(({ id, frontmatter, excerpt, slug }, index) => (
            <article
              key={index}
              className="rounded-lg p-4 shadow-lg dark:bg-gray-800 relative"
            >
              <span className="text-xs mb-3 inline-block">
                {frontmatter.date}
              </span>
              <h3>
                <Link
                  to={`../blog/${slug}`}
                  className="text-2xl mb-3 font-bold inline-block hover:text-blue-400"
                >
                  {frontmatter.title}
                </Link>
              </h3>
              <p className="mb-10 text-md">
                {frontmatter.description ? frontmatter.description : excerpt}
              </p>
              <div className="absolute bottom-0 my-5">
                {frontmatter.tags.map((tag) => (
                  <span className="inline-block mr-1 text-sm font-bold">#{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </section>
      )}
    </Layout>
  );
};

export const query = graphql`
  query BlogsQuery {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "BLOG" }, draft: {in: false}} }
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
