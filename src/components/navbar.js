import * as React from "react"
import { Link } from "gatsby"

import "../styles/navbar.module.css"
import ThemeToggle from "./themeToggle.js"


const Navbar = () => {
  return (
    <nav className="border-b border-gray-300 mb-5 md:mt-10">
      <div className="flex justify-between items-center mb-5">
        <div className="font-bold text-3xl">
          Miftahuddin
        </div>
        <ThemeToggle />
      </div>
      <div className="mb-5">
        <Link className="mr-3 hover:underline font-bold" to="/">Home</Link>
        <Link className="mr-3 hover:underline font-bold" to="/blogs">Blogs</Link>
        <Link className="mr-3 hover:underline font-bold" to="/projects">Projects</Link>
      </div>
    </nav >
  )
}

export default Navbar