import {
  Box, Typography, Button, Card,
} from '@mui/material';

import { styled } from '@mui/system';
import PokemonCardLoading from './PokemonCardLoading';
import { SPRITE_SIZE } from '../../helpers/spriteSize';

const ViewPokemonButton = styled(Button)`
   position: unset;
`;

export default function PokemonCard({
  isLoading,
  sprite,
  pokemonName,
  handleClick,
}) {
  return (
    <Card>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        py={3}
        px={3}
        onClick={handleClick}
      >
        {isLoading ? (
          <PokemonCardLoading />
        ) : (
          <>
            <Typography
              align="left"
              sx={{
                textTransform: 'capitalize',
              }}
            >
              {pokemonName}
            </Typography>
            <Box
              component="img"
              sx={{
                height: SPRITE_SIZE,
                width: SPRITE_SIZE,
              }}
              alt={pokemonName}
              src={sprite}
            />
            <ViewPokemonButton>
              VIEW POKEMON
            </ViewPokemonButton>
          </>
        )}
      </Box>
    </Card>
  );
}