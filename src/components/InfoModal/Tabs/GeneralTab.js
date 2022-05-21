import {
  Box, Typography, Chip, Stack,
} from '@mui/material';
import { useEffect, useState } from 'react';

export default function GeneralTab({ pokemonData }) {
  const [pokemonSpeciesData, setPokemonSpeciesData] = useState({});
  const {
    name, sprites, species, types,
  } = pokemonData;
  const { genera, shape, habitat } = pokemonSpeciesData;
  const genus = genera?.find((o) => o.language.name === 'en');

  const getAndSetPokemonSpeciesData = async (url) => {
    await fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemonSpeciesData(data));
  };

  useEffect(() => {
    getAndSetPokemonSpeciesData(species.url);
  }, []);

  return (
    <Box display="flex" flexDirection="row">
      <Box flexDirection="column">
        <Typography
          variant="h4"
          sx={{
            textTransform: 'capitalize',
          }}
        >
          {name}
        </Typography>
        <Box
          component="img"
          sx={{
            height: 128,
            width: 128,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt={name}
          src={sprites.front_default}
        />
      </Box>
      <Box flexDirection="column" px={6} py={3}>
        <Box flexDirection="row">
          <Stack direction="row" spacing={3}>
            {types.map((type) => (
              <Chip
                color="primary"
                label={type.type.name}
                sx={{ textTransform: 'capitalize' }}
              />
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography sx={{
            textTransform: 'capitalize',
          }}
          >
            Shape:&nbsp;
            {shape && shape.name}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{
            textTransform: 'capitalize',
          }}
          >
            Habitat:&nbsp;
            {habitat && habitat.name}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{
            textTransform: 'capitalize',
          }}
          >
            Genus:&nbsp;
            {genus && genus.name}
          </Typography>
        </Box>
      </Box>
    </Box>

  );
}
