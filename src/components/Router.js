import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import PokemonInformation from './PokemonInformation';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/?pokemonName=" element={<PokemonInformation />} />
    </Routes>
  );
}
