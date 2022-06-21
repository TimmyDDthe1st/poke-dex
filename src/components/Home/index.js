import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

import Card from '../List/index';
import baseUrl from '../../helpers/baseUrl';

function Home() {
  const [pokemonData, setPokemonData] = useState({});

  const getAndSetPokemonData = async (url) => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemonData(data));
  };

  useEffect(() => {
    getAndSetPokemonData(`${baseUrl()}pokemon/`);
  }, []);

  const handleClick = async (forward) => {
    const { next, previous } = pokemonData;
    const url = forward ? next : previous;

    if (url !== null) {
      getAndSetPokemonData(url);
    }
  };

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
      {pokemonData.results
                  && pokemonData.results.map((result) => <Card data={result} key={result.name} />)}
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Button onClick={() => handleClick(false)}>PREVIOUS</Button>
        <Button onClick={() => handleClick(true)}>NEXT</Button>
      </Box>
    </Box>

  );
}

export default Home;
