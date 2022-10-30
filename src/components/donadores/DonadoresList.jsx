import { useContext } from "react";
import { ContextPrincipal } from "../../context/ContextPrincipal";
import CardDonador from "./CardDonador";
import Sidebar from '../navbar/Sidebar'

function DonadoresList() {
  const { datosArray } = useContext(ContextPrincipal);

  return (
    <main className="h-[92vh] flex gap-8 p8 pt-4">
      <div>
          <Sidebar/>        
      </div>

      {/* Contenido */}
      <div className=" ml-[60px] grid grid-cols-6 gap-3 py-1 px-1 bg-[#ba7527] overflow-y-scroll">
      {/* <div className="bg-[#ba7527] mr-2 gap-3 grid grid-cols-6 justify-between overflow-y-scroll"> */}
        {datosArray.map((donadores) => (
          <CardDonador key={donadores.SteamId} datosArray={donadores} />
        ))}
      </div>
    
    </main>
  );
}

export default DonadoresList;
