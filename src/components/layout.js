import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Navbar from "./navbar";

import "../styles/global.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div className="transition duration-300 ease-in-out dark:text-white relative">
      <Helmet>
        <html lang="en" />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <Navbar />
      <main>
        <div className="grid lg:grid-cols-12">
          <div className="md:col-span-10 md:col-start-2">
            <div className="py-5 px-4">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
