import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

import Card from '../PokemonList/index';

function Home() {
  const [pokemonData, setPokemonData] = useState({});

  const getAndSetPokemonData = async (url) => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
  };

  useEffect(() => {
    getAndSetPokemonData('https://pokeapi.co/api/v2/pokemon/');
  }, []);

  const handleClick = async (forward) => {
    const { next, previous } = pokemonData;
    const url = forward ? next : previous;

    if (url !== null) {
      getAndSetPokemonData(url);
    }
  };

  return (
    <>
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {pokemonData.results
          ? pokemonData.results.map((result) => <Card data={result} key={result.name} />)
          : <Typography>Error</Typography>}
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Button onClick={() => handleClick(false)}>PREVIOUS</Button>
        <Button onClick={() => handleClick(true)}>NEXT</Button>
      </Box>
    </>

  );
}

export default Home;
