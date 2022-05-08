import { Typography, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonInformation() {
  // eslint-disable-next-line no-unused-vars
  const objToString = (obj) => Object.entries(obj).reduce((str, [p, val]) => `${val}\n`, '');
  const [pokemonData, setPokemonData] = useState({});
  const urlParam = useParams();
  const pokemonName = objToString(urlParam);

  const getAndSetPokemonData = async (link) => {
    await fetch(link)
      .then((res) => res.json())
      .then((json) => {
        setPokemonData(json);
      });
  };

  useEffect(() => {
    getAndSetPokemonData(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  }, []);

  const { name } = pokemonData;

  return (
    <Box>
      <Typography>POKEMON INFORMATION</Typography>
      <Typography>{name}</Typography>
    </Box>
  );
}
