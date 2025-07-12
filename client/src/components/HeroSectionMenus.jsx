import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineExternalLink } from "react-icons/hi";

const HeroSectionMenus = () => {
    const user = [
    {
      name: "John Doe",
      mobile: "1234567890",
      role: "User",
    }]
  return (
     <div>

      <div className="text-sm grid gap-1">
       
        <Link
          to={"/dashboard/myorders"}
          className="px-2 hover:bg-orange-200 py-1"
        >
         Automobiles
        </Link>

        <Link
          to={"/dashboard/address"}
          className="px-2 hover:bg-orange-200 py-1"
        >
          Clothes and wear
        </Link>
        <Link
          to={"/dashboard/address"}
          className="px-2 hover:bg-orange-200 py-1"
        >
          Home interiors
        </Link>
        <Link
          to={"/dashboard/address"}
          className="px-2 hover:bg-orange-200 py-1"
        >
          Computer and tech
        </Link>
        <Link
          to={"/dashboard/address"}
          className="px-2 hover:bg-orange-200 py-1"
        >
          Tools, equipments
        </Link>
        <Link
          to={"/dashboard/address"}
          className="px-2 hover:bg-orange-200 py-1"
        >
            Sports and outdoor
        </Link>
        <Link
          to={"/dashboard/address"}
          className="px-2 hover:bg-orange-200 py-1"
        >
          Animal and pets
        </Link>
        <Link
          to={"/dashboard/address"}
          className="px-2 hover:bg-orange-200 py-1"
        >
          More category
        </Link>
      </div>
    </div>
  )
}

export default HeroSectionMenus