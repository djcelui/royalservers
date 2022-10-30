import { createContext, useState, useEffect } from "react";

export const ContextPrincipal = createContext();
// const url = URI_DONADORES; //"http://190.104.182.155:3000/api/donadores";

export function ContextPrincipalProvider(props) {
  const URI_DONA = import.meta.env.VITE_URI_DONADORES;
  const [donador, setDonador] = useState([]);

  useEffect(() => {
    fetch('http://190.104.182.155:3000/api/donadores')
      .then((res) => res.json())
      .then((data) => setDonador(data));
  }, []);

  return (
    <ContextPrincipal.Provider
      value={{
        datosArray: donador,
      }}
    >
      {props.children}
    </ContextPrincipal.Provider>
  );
}
