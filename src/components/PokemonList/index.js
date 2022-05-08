import {
  Typography, Paper, Avatar, Button, Skeleton,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ data }) {
  const { name, url } = data;
  const [pokemonData, setPokemonData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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
    navigate(`/${name}`);
  };

  return (
    <Paper>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        {isLoading
          ? <Skeleton variant="circular" width={64} height={64} />
          : (
            <Avatar
              alt={name}
              src={pokemonData.sprites.front_default}
              sx={{ width: 64 }}
            />
          )}

        <Box display="flex" alignItems="center" py={3} px={3}>
          <Typography align="left">{name}</Typography>
        </Box>
        <Button onClick={handleClick}>VIEW POKEMON</Button>
      </Box>
    </Paper>
  );
}
