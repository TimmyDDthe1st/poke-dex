import { Button, Grid, Box } from '@mui/material';
import { useEffect, useState } from 'react';

import List from '../List/index';
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
    <>
      <Grid container direction="row">
        {pokemonData.results
                  && pokemonData.results.map((result) => (
                    <Grid item xs={6} md={3}>
                      <List data={result} key={result.name} />
                    </Grid>
                  ))}
      </Grid>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Button onClick={() => handleClick(false)}>PREVIOUS</Button>
        <Button onClick={() => handleClick(true)}>NEXT</Button>
      </Box>
    </>
  );
}

export default Home;
