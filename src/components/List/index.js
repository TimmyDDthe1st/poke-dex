import {
  Paper,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import InfoModal from '../InfoModal';
import Card from './Card';

export default function PokemonInformation({ data }) {
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
      <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
        <Card
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
      </Box>
    </Paper>
  );
}
