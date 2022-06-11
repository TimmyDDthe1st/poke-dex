import {
  Paper,
} from '@mui/material';
import { useEffect, useState } from 'react';
import InfoModal from '../InfoModal';
import PokeCard from './PokeCard';

export default function List({ data }) {
  const [openModal, setOpenModal] = useState(false);
  const [pokemonData, setPokemonData] = useState({ sprites: '' });
  const [isLoading, setIsLoading] = useState(true);
  const { name, url } = data;
  const { sprites } = pokemonData;

  const getAndSetPokemonData = async (link) => {
    setIsLoading(true);
    await fetch(link)
      .then((res) => res.json())
      .then((json) => {
        setPokemonData(json);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAndSetPokemonData(url);
  }, []);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <Paper>
      <PokeCard
        isLoading={isLoading}
        sprite={sprites.front_default}
        pokemonName={name}
        handleClick={handleClick}
      />
      <InfoModal
        setOpenModal={setOpenModal}
        openModal={openModal}
        pokemonName={name}
        pokemonData={pokemonData}
      />
    </Paper>
  );
}
