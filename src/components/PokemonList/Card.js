import {
  Skeleton, Stack, Box, Typography, Button, Card,
} from '@mui/material';

export default function PokemonCard({
  isLoading, sprite, pokemonName, handleClick,
}) {
  const SPRITE_SIZE = 128;
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
        {
        isLoading
          ? (
            <Stack>
              <Skeleton variant="text" />
              <Skeleton variant="circular" width={SPRITE_SIZE} height={SPRITE_SIZE} />
              <Skeleton variant="text" />
            </Stack>
          )
          : (
            <>
              <Typography align="left">{pokemonName}</Typography>
              <Box
                component="img"
                sx={{
                  height: SPRITE_SIZE,
                  width: SPRITE_SIZE,
                }}
                alt={pokemonName}
                src={sprite}
              />

              <Button onClick={handleClick}>VIEW POKEMON</Button>
            </>
          )
      }
      </Box>
    </Card>

  );
}
