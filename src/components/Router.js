import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import PokemonInformation from './PokemonInformation';

export default function Router() {
  return (
    <Routes>
      <Route path=":pokemonName" element={<PokemonInformation />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
