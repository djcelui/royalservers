import DinosList from "../dinos/DinosList";

function CardDonador({ datosArray }) {
  return (
    <div className="bg-[#272325] w-70% rounded-2xl p-3">
      <b className="text-[#b84803] ">Player : </b>
      <c className="text-white">{datosArray.PlayerName}</c>
      <p>
        <b className="text-[#b84803] ">SteamId : </b>
        <c className="text-white">{datosArray.SteamId}</c>
      </p>
      <b className="text-[#b84803] ">Relate : </b>
      <c className="text-white">{datosArray.MontoInvertido}</c>
      <DinosList SteamId={datosArray.SteamId} />
    </div>
  );
}

export default CardDonador;
