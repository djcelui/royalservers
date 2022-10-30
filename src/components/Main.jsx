import DonadoresList from "../components/donadores/DonadoresList";
import Portada from './portadas/Portada'
import Planes from './apoyanos/Planes'
import ServersRoyal from './serversRoyal/ServersRoyal'

export function Admin() {
  return (
    <div className="bg-[#272325] p-2">
      <DonadoresList />
    </div>
  );
}

export function Home() {
    return (
      <div>
        <Portada />
      </div>
    );
  }

export function Apoyanos() {
  return (
    <main className="bg-[#272325] p-12">
      <Planes />
    </main>
  );
}

  
export function Miembros() {
  return (
    <>
      <a href="http://royalserver-ar.ddns.net/servers" target="_blank">Miembros</a>
    </>
  );
}



export function Servers() {
  return (
    <div>
      <ServersRoyal />
    </div>
  );
}

export function Tienda() {
  return (
    <main>
      Pagina Tienda
    </main>
  );
}

export function Nosotros() {
  return (
    <main>
      Pagina Nosotros
    </main>
  );
}
  