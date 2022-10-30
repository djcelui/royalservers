import React, { useState } from "react";
import {
  RiMoneyDollarCircleLine,
  RiFacebookLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiTwitterLine,
  RiFilter3Line,
  RiCloseLine,
} from "react-icons/ri";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className={`w-[80%] md:w-[40%] fixed lg:static top-0 ${showSidebar ? "left-0" : "-left-full"} 
      lg:w-40 h-full text-gray-400 transition-all bg-[#181A20] p-4 lg:p-0 shadow-2xl lg:shadow-none z-50`}
      >
        {/* Filtros */}
        <div className="bg-[#362C29]/50 p-4 mb-4 h-full">
          <h4 className="mb-4 text-white text-lg">Filtros</h4>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="indy" className="accent-[#E58D27]" />
              <label htmlFor="indy">PVE</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Adventure"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Adventure">PVP</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="MMO" className="accent-[#E58D27]" />
              <label htmlFor="MMO">Este Mes</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Casual Game"
                className="accent-[#E58D27]"
              />
              <label htmlFor="Casual Game">Todos</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;