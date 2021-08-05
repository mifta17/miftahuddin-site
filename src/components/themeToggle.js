import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const ThemeToggle = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label className={`w-12 h-6 flex items-center rounded-full p-1 ${theme === 'dark' ? "bg-indigo-500" : "bg-yellow-200"}`}>
          <input type="checkbox" className="hidden"
            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />
          <div className={`bg-white w-4 h-4 rounded-full shadow-md duration-300 ease-in-out ${theme === 'dark' ? "transform translate-x-6" : ""}`} />
        </label>
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle