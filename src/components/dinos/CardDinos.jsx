function CardDinos({ dinosDinosArray }) {
  return (
    <div className="" key={dinosDinosArray.id}>
      <ul>
        <li>
          <b className="text-[#b84803] ">Tipo : </b> {dinosDinosArray.tipo}{" "}
          <br></br>
          <b className="text-[#b84803] ">Nombre : </b> {dinosDinosArray.nombre}
        </li>
      </ul>
      <ul>
        <li>
          <b className="text-[#b84803] ">idark1 : </b> {dinosDinosArray.idark1}{" "}
          <br></br>
          <b className="text-[#b84803] ">idark2 : </b> {dinosDinosArray.idark2}
        </li>
      </ul>
      <br></br>
    </div>
  );
}

export default CardDinos;
