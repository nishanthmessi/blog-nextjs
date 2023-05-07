import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex justify-between mx-6 my-4">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex gap-2">
        <ul>
          <li><Link href="/about">
            About
          </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar