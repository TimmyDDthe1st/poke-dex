import { Routes, Route } from 'react-router-dom';
import Pokedex from './Pokedex';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Pokedex />} />
    </Routes>
  );
}
