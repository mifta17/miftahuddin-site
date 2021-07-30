import * as React from "react"
import { Link } from "gatsby"

import "../styles/navbar.module.css"


const Navbar = () => {
  return (
    <nav class="py-1 px-4 border-b border-gray-300 flex justify-between">
      <div class="font-bold text-xl py-2">
        Miftahuddin
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar