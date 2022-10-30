import { useState, useEffect } from "react";
import CardDinos from "./CardDinos";

// const url = URI_DINOS; //"http://190.104.182.155:3000/api/dinos/";

function DinosList({ SteamId }) {
  const URI_DIN = import.meta.env.VITE_URI_DINOS;

  // let urlFinal = `${URI_DIN}/${SteamId}`;
  let urlFinal = `${URI_DIN}/${SteamId}`;
  
  const [dinos, setDinos] = useState([]);

  useEffect(() => {
    fetch(urlFinal)
      .then((response) => {
        if (response.ok) {
          console.log("OK");
          return response.json();
        }
        throw new Error("Algo se Rompio");
        // return null;
      })
      .then((responseJson) => {
        setDinos(responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (dinos.length > 0) {
    return (
      <div className="bg-[#ba7527] rounded-2xl p-2">
        <b className="text-[#022f52]">Dinos</b>
        {dinos.map((dinosArray) => (
          <CardDinos key={dinosArray.id} dinosDinosArray={dinosArray} />
        ))}
      </div>
    );
  }
}

export default DinosList;
