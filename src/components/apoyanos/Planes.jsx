function Planes() {
  return (
    <div className="bg-[#272325] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-[5rem] ml-16 mr-16">
      {/* <!-- Article --> */}
      <article className="relative mb-8 lg:mb-0">
        {/* <!-- Price --> */}
        <div className="bg-[white] rounded-full flex flex-col items-center justify-center w-[90px] h-[90px] mx-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] absolute left-[50%] -translate-x-[50%] -top-12 z-20">
          <h1 className="text-3xl font-bold text-[#7647cf]">$10</h1>
          <span className="text-gray-500 text-sm">/ mes</span>
        </div>
        {/* <!-- Title --> */}
        <div className="bg-gradient-to-t from-[#883ecf] to-[#e58d27] h-[300px] rounded-xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100%] rounded-br-[100%]">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl text-white font-bold uppercase tracking-[8px]">
              Pass Vip Rex
            </h1>
            <p className="text-gray-300 uppercase tracking-[2px] text-sm">
            Pase Vip Oro
            </p>
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="bg-[#2e2930] w-[90%] mx-auto p-8 pt-32 -mt-20 rounded-xl shadow-2xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl tracking-[5px] font-medium"></h2>
            <p className="text-gray-400 uppercase text-xs tracking-[3px]">
            Stats
            </p>
          </div>
          <div className="mt-4 py-6">
            <ul className="flex flex-col items-center">
              <li className="inline-flex gap-4 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-500">
                Exp : x 6.0
                </span>
              </li>
              <li className="inline-flex gap-4 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-500">
                Tameo: x 7.0
                </span>
              </li>
              <li className="inline-flex gap-4 my-2 opacity-[.4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-gray-500">
                  Farmeo: x 7.0
                </span>
              </li>
              <li className="inline-flex gap-4 my-2 opacity-[.4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-gray-500">
                Puntos cada 60 min: 70
                </span>
              </li>
              <li className="inline-flex gap-4 my-2 opacity-[.4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-gray-500">
                Pintar Dino
                </span>
              </li>
              <li className="inline-flex gap-4 my-2 opacity-[.4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-gray-500">
                Cambiar Genero de Dinos
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Button --> */}
        <div className="w-[40%] mx-auto -mt-7">
          <button className="w-full bg-gradient-to-r from-[#883ecf] to-[#e58d27] hover:from-[#d02597] hover:to-[#883ecf] text-white p-4 rounded-full">
            Ordenar ahora
          </button>
        </div>
      </article>
      {/* <!-- Article --> */}
      <article className="relative mb-8 lg:mb-0">
        {/* <!-- Price --> */}
        <div className="bg-[white] rounded-full flex flex-col items-center justify-center w-[100px] h-[100px] mx-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] absolute left-[50%] -translate-x-[50%] -top-12 z-20">
          <h1 className="text-3xl font-bold text-[#d22196]">$20</h1>
          <span className="text-gray-500 text-sm">/ mes</span>
        </div>
        {/* <!-- Title --> */}
        <div className="relative bg-gradient-to-t from-[#d22196] to-[#e58d27] h-[300px] rounded-xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100%] rounded-br-[100%]">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl text-white font-bold uppercase tracking-[8px]">
              Pass Vip Giga
            </h1>
            <p className="text-gray-300 uppercase tracking-[2px] text-sm">
            Pase Vip Platino
            </p>
            <div className="absolute bg-white rounded-full py-1 px-6 mt-8 bottom-10">
              <h3>Recomendado</h3>
            </div>
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="bg-[#44373e] w-[90%] mx-auto p-8 pt-32 -mt-20 rounded-xl shadow-2xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl tracking-[5px] font-medium"></h2>
            <p className="text-gray-400 uppercase text-xs tracking-[3px]">
            STATS
            </p>
          </div>
          <div className="mt-4 py-6">
          <ul className="flex flex-col items-center">
              <li className="inline-flex gap-4 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-500">
                Exp : x 6.0
                </span>
              </li>
              <li className="inline-flex gap-4 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-500">
                Tameo: x 7.0
                </span>
              </li>
              <li className="inline-flex gap-4 my-2 opacity-[.4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-gray-500">
                  Farmeo: x 7.0
                </span>
              </li>
              <li className="inline-flex gap-4 my-2 opacity-[.4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-gray-500">
                Puntos cada 60 min: 70
                </span>
              </li>
              <li className="inline-flex gap-4 my-2 opacity-[.4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-gray-500">
                Pintar Dino
                </span>
              </li>
              <li className="inline-flex gap-4 my-2 opacity-[.4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-gray-500">
                Cambiar Genero de Dinos
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Button --> */}
        <div className="w-[40%] mx-auto -mt-7">
          <button className="w-full bg-gradient-to-r from-[#d22196] to-[#e58d27] hover:from-[#ef3460] hover:to-[#d22196] text-white p-4 rounded-full">
            Ordenar ahora
          </button>
        </div>
      </article>
      {/* <!-- Article --> */}
      <article className="relative mb-8 lg:mb-0">
        {/* <!-- Price --> */}
        <div className="bg-[white] rounded-full flex flex-col items-center justify-center w-[90px] h-[90px] mx-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] absolute left-[50%] -translate-x-[50%] -top-12 z-20">
          <h1 className="text-3xl font-bold text-[#7647cf]">$30</h1>
          <span className="text-gray-500 text-sm">/ mes</span>
        </div>
        {/* <!-- Title --> */}
        <div className="bg-gradient-to-t from-[#883ecf] to-[#e58d27] h-[300px] rounded-xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100%] rounded-br-[100%]">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl text-white font-bold uppercase tracking-[8px]">
              Pass Vip Titan
            </h1>
            <p className="text-gray-300 uppercase tracking-[2px] text-sm">
              Pase Vip Diamante
            </p>
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="bg-[#4a2a39] w-[90%] mx-auto p-8 pt-32 -mt-20 rounded-xl shadow-2xl">
          <div className="flex flex-col items-center">
            <h2 className="text-xl tracking-[5px] font-medium"></h2>
            <p className="text-gray-400 uppercase text-xs tracking-[3px]">
            STATS
            </p>
          </div>
          <div className="mt-4 py-6">
          <ul className="flex flex-col items-center">
              <li className="inline-flex gap-4 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-500">
                Exp : x 6.0
                </span>
              </li>
              <li className="inline-flex gap-4 my-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-500">
                Tameo: x 7.0
                </span>
              </li>
              <li className="inline-flex gap-4 my-2 opacity-[.4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-gray-500">
                  Farmeo: x 7.0
                </span>
              </li>
              <li className="inline-flex gap-4 my-2 opacity-[.4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-gray-500">
                Puntos cada 60 min: 70
                </span>
              </li>
              <li className="inline-flex gap-4 my-2 opacity-[.4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-gray-500">
                Pintar Dino
                </span>
              </li>
              <li className="inline-flex gap-4 my-2 opacity-[.4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="text-gray-500">
                Cambiar Genero de Dinos
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Button --> */}
        <div className="w-[40%] mx-auto -mt-7">
          <button className="w-full bg-gradient-to-r from-[#883ecf] to-[#e58d27] hover:from-[#d02597] hover:to-[#883ecf] text-white p-4 rounded-full">
            Ordenar ahora
          </button>
        </div>
      </article>
    </div>
  );
}

export default Planes;
