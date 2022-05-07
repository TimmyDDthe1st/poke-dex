import { useLocation } from 'react-router-dom';

export default function PokemonInformation() {
  const location = useLocation();

  console.log(location.state);
  return <h1>POKEMON INFORMATION</h1>;
}
