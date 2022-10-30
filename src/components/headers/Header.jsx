import React from "react";
import {Link} from "react-router-dom";

import {
  RiDiscordFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiInstagramFill,
} from "react-icons/ri";

function Header() {
  return (
    <div className="bg-[#272325] w-full text-[#e58d27] p-4 grid md:grid-cols-12 gap-4 items-center justify-center">
      <h1 className="md:col-span-2 ml-6 flex justify-center md:justify-start font-bold cursor-pointer text-3xl">
      <Link to="/">
        RoyalServers
      </Link>
      </h1>
      {/* <nav className="md:col-span-8 flex items-center gap-4 justify-center"> */}
      <nav className="md:col-span-8 mt-0 flex items-center gap-4 justify-center">
      <Link
          to="/"
          className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">
          Home
        </Link>
        <Link
          to="/Servers"
          className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">
          Servers
        </Link>
        {/* <a href="http://royalserver-ar.ddns.net/servers">Miembros</a> */}
        {/* <Link
          to="/Miembros"
          className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">
          Miembros
        </Link> */}
        <a href="http://royalserver-ar.ddns.net/servers" target="_blank" className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">Miembros</a>
        <Link
          to="/Tienda"
          className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">
          Tienda
        </Link>
        <Link
          to="/Apoyanos"
          className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">
          Apoyanos
        </Link>
        <Link
          to="/Admin"
          className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-100 transition-colors">
          Admin
        </Link>
      </nav>
      <div className="md:col-span-2 flex items-center justify-center md:justify-end gap-4 mr-4">
        <a href="#">
          <RiDiscordFill className="w-6 h-6 fill-current" />
        </a>
        <a href="#">
          <RiFacebookBoxFill className="w-6 h-6 fill-current" />
        </a>
        <a href="#">
          <RiTwitterFill className="w-6 h-6 fill-current" />
        </a>
        <a href="#">
          <RiInstagramFill className="w-6 h-6 fill-current" />
        </a>
      </div>
    </div>
  );
}

export default Header;
