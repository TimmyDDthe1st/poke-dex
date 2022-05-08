import { Typography, Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function PokemonInformation() {
  const navigate = useNavigate();
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

  const handleClick = () => {
    navigate(-1);
  };

  const { name } = pokemonData;

  return (
    <Box>
      <Button onClick={handleClick}>BACK</Button>
      <Typography>POKEMON INFORMATION</Typography>
      <Typography>{name}</Typography>
    </Box>
  );
}
