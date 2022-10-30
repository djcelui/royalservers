import {Link} from 'react-router-dom'
import { WiAlien } from 'react-icons/wi'


function Navbar() {
  return (
    <main>
      {/* <!-- Navigation --> */}
      {/* <!-- Brand --> */}
      {/* <img src="../../img/Royal-server-logo-300x300.jpg"></img> */}
      <header className="bg-[#2D3E4E]  text-cyan-500 w-28 fixed font-bold px-4">
        RoyalServer
        </header>
        {/* <!-- Left Nav --> */}
        <nav className="bg-[#2D3E4E] text-cyan-500 fixed ml-28 w-full">
          <ul className="flex ml-72 mr-40 justify-between ">
            <li>
            {/* <Link to="/Miembros" className='flex gap-1 text-center mt-1 hover:text-amber-800 transition' >
              <WiAlien className='text-amber-600 h-6 '/>Miembros</Link> */}
              <a href="http://royalserver-ar.ddns.net/servers"></a>
            </li>
            <li>
              <Link to="/Servers" className='flex gap-1 text-center mt-1 hover:text-amber-800 transition'>Servers</Link>
            </li>
            <li>
              <Link to="/Nosotros" className='flex gap-1 text-center mt-1  hover:text-amber-800 transition'>Nosotros</Link>
            </li>
            <li>
              <Link to="/Admin" className='flex gap-1 text-center mt-1 hover:text-amber-800 transition'>Admin</Link>
            </li>
          </ul>
        </nav>
        <hr></hr>
    </main>
  );
}

export default Navbar;
