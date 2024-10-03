import React from "react"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
  const navBarLinks = [
    { url: "/", title: "Home" },
    { url: "/character", title: "Characters" },
    { url: "/location", title: "Locations" },
    { url: "/episode", title: "Episodes" },
    { url: "/analysis", title: "Analysis" },
  ]

  return (
    <div className="bg-gray-800 w-full">
      <nav className=" p-4">
        <ul className="flex justify-around list-none m-0 p-0">
          {navBarLinks.map((item, index) => (
            <li key={`${index}-${item.title}`} className="mx-4">
              <Link
                to={item.url}
                className="text-white text-lg hover:underline"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
