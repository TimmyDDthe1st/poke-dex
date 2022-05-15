import { Routes, Route } from 'react-router-dom';
import Home from './Home';
// import PokemonInfoModal from './PokemonInfoModal';

export default function Router() {
  return (
    <Routes>
      {/*
      <Route path=":pokemonName" element={<PokemonInfoModal />} />
      */}
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
