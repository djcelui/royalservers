import { useState } from "react";
import {
  RiHome3Line,
  RiFirefoxLine,
  RiLayoutGridLine,
  RiTeamLine,
  RiLiveLine,
  RiDownload2Line,
  RiSettings3Line,
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
  RiNotification3Line,
  RiSearchLine,
  RiArrowRightSLine,
  RiArrowLeftCircleLine,
  RiArrowRightCircleLine  
} from "react-icons/ri";

function Portada() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#272325] min-h-screen">
      {/* Content */}
      <main className="lg:pl-[240px] lg:pr-[240px] p-4 pt-4">
        {/* Royal Servers */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 ml-20">
          <div className="md:col-span-6 relative">
            <img
              src="https://i0.wp.com/www.gamerfocus.co/wp-content/uploads/2022/06/ark-survival-evolved-gratis-steam-junio-2022.webp"
              className="w-[1400px] h-[400px] object-cover lg:rounded-3xl lg:rounded-bl-xl opacity-80"
            />
            <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">
              Ark Servers
            </h1>
            <div className="absolute left-0 bottom-0 p-8 max-w-x">
              <p className="text-gray-200">Update 15/10/2022</p>
              <h2 className="text-2xl text-white font-extrabold mb-4">
              --== ATENCION ==--
              <br></br>
              Noticias o Novedades del Server
              </h2>
              <button
                className="bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center gap-2 text-lg group"
                onClick={() => {
                  window.open("https://discord.gg/GK84ZuWsB2", "_blank");
                }}
              >
                Unetenos en Discord {" "}
                <RiArrowRightSLine className="group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
          <div className="md:col-span-6 relative">
            <img
              src="https://cloudfront-us-east-1.images.arcpublishing.com/elcomercio/A4XRDMTSPJDUTDVZXQ6ZEDXMOQ.webp"
              className="w-[1400px] h-[400px] lg:rounded-3xl lg:rounded-bl-xl opacity-80"
            />
            <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">
              Minecraft Servers
            </h1>
            <div className="absolute left-0 bottom-0 p-8 max-w-x">
              <p className="text-gray-200">Update 15/10/2022</p>
              <h2 className="text-2xl text-white font-extrabold mb-4">
              --== ATENCION ==--
              <br></br>
              Noticias o Novedades del Server
              </h2>
              <button
                className="bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center gap-2 text-lg group"
                onClick={() => {
                  window.open("https://discord.gg/GK84ZuWsB2", "_blank");
                }}
              >
                Unetenos en Discord {" "}
                <RiArrowRightSLine className="group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
          <div className="md:col-span-6 relative">
            <img
              src="https://media.zicxa.com/932809"
              className="w-[1400px] h-[400px] object-cover lg:rounded-3xl lg:rounded-bl-xl opacity-70"
            />
            <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">
              Rust Servers
            </h1>
            <div className="absolute left-0 bottom-0 p-8 max-w-x">
              <p className="text-gray-200">Update 15/10/2022</p>
              <h2 className="text-2xl text-white font-extrabold mb-4">
              --== ATENCION ==--
              <br></br>
              Noticias o Novedades del Server
              </h2>
              <button
                className="bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center gap-2 text-lg group"
                onClick={() => {
                  window.open("https://discord.gg/GK84ZuWsB2", "_blank");
                }}
              >
                Unetenos en Discord {" "}
                <RiArrowRightSLine className="group-hover:translate-x-1 transition-all" />
              </button>
            </div>
          </div>
        </div>

        {/* Slide videogames */}
        <div className="mt-14 mb-6 flex items-center justify-between">
          <h5 className="text-[#e58d27] text-2xl">Cluster PVE</h5>
        </div>
        {/* Videogames */}
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="p-4">
            <img
              src="https://www.xtalemate.org/wp-content/uploads/2022/06/Fjordur_Impresiones_Portada_v1.webp"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Fjordur</h3>
            <p className="text-gray-500 mb-3">Exp x4</p>
          </div>
          <div className="p-4">
            <img
              src="https://pbs.twimg.com/media/FDkzElYXoAQZ6Uy?format=jpg"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">LostIsland</h3>
            <p className="text-gray-500 mb-3">Exp x4</p>
          </div>
          <div className="p-4">
            <img
              src="https://netogoto.com/wp-content/uploads/2021/03/ark_g2.jpg"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Genesis 2</h3>
            <p className="text-gray-500 mb-3">Exp x4</p>
          </div>
          <div className="p-4">
            <img
              src="https://i0.wp.com/gideonsgaming.com/wp-content/uploads/2020/03/ARK-Genesis-2-title-2.jpg"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Genesis</h3>
            <p className="text-gray-500 mb-3">Exp x4</p>
          </div>
          <div className="p-4">
            <img
              src="https://i0.wp.com/gideonsgaming.com/wp-content/uploads/2020/03/ARK-Genesis-2-title-2.jpg"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Genesis</h3>
            <p className="text-gray-500 mb-3">Exp x4</p>
          </div>
          <div className="p-4">
            <img
              src="https://i0.wp.com/gideonsgaming.com/wp-content/uploads/2020/03/ARK-Genesis-2-title-2.jpg"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Genesis</h3>
            <p className="text-gray-500 mb-3">Exp x4</p>
          </div>
          <div className="p-4">
            <img
              src="https://i0.wp.com/gideonsgaming.com/wp-content/uploads/2020/03/ARK-Genesis-2-title-2.jpg"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Genesis</h3>
            <p className="text-gray-500 mb-3">Exp x4</p>
          </div>
          <div className="p-4">
            <img
              src="https://i0.wp.com/gideonsgaming.com/wp-content/uploads/2020/03/ARK-Genesis-2-title-2.jpg"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Genesis</h3>
            <p className="text-gray-500 mb-3">Exp x4</p>
          </div>
          <div className="p-4">
            <img
              src="https://i0.wp.com/gideonsgaming.com/wp-content/uploads/2020/03/ARK-Genesis-2-title-2.jpg"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Genesis</h3>
            <p className="text-gray-500 mb-3">Exp x4</p>
          </div>
          <div className="p-4">
            <img
              src="https://i0.wp.com/gideonsgaming.com/wp-content/uploads/2020/03/ARK-Genesis-2-title-2.jpg"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Genesis</h3>
            <p className="text-gray-500 mb-3">Exp x4</p>
          </div>
          <div className="p-4">
            <img
              src="https://i0.wp.com/gideonsgaming.com/wp-content/uploads/2020/03/ARK-Genesis-2-title-2.jpg"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Genesis</h3>
            <p className="text-gray-500 mb-3">Exp x4</p>
          </div>
          <div className="p-4">
            <img
              src="https://i0.wp.com/gideonsgaming.com/wp-content/uploads/2020/03/ARK-Genesis-2-title-2.jpg"
              className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Genesis</h3>
            <p className="text-gray-500 mb-3">Exp x4</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Portada;
