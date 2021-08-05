import * as React from "react";
import { Link } from "gatsby";

import "../styles/navbar.module.css";
import ThemeToggle from "./themeToggle.js";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-300 dark:border-gray-700 mb-5">
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-10 lg:col-start-2">
          <div className="flex justify-between items-center px-4 py-5">
            <div className="font-bold text-3xl">Miftahuddin</div>
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-10 lg:col-start-2">
          <div className="px-4 py-3 flex">
            <Link
              className="text-sm flex items-center hover:bg-blue-400 hover:text-white rounded-md font-bold py-2 px-3"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
            <Link
              className="text-sm flex items-center hover:bg-blue-400 hover:text-white rounded-md font-bold py-2 px-3"
              to="/blogs"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              Blogs
            </Link>
            <Link
              className="text-sm flex items-center hover:bg-blue-400 hover:text-white rounded-md font-bold py-2 px-3"
              to="/projects"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
