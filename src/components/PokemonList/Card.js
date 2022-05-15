import {
  Skeleton, Box, Typography, Button, Card,
} from '@mui/material';

export default function PokemonCard({
  isLoading, sprite, pokemonName, handleClick,
}) {
  return (

    <Card>
      {
        isLoading
          ? <Skeleton variant="circular" width={64} height={64} />
          : (
            <Box
              component="img"
              sx={{
                height: 128,
                width: 128,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt={pokemonName}
              src={sprite}
            />
          )
      }
      <Box display="flex" alignItems="center" py={3} px={3}>
        <Typography align="left">{pokemonName}</Typography>
      </Box>
      <Button onClick={handleClick}>VIEW POKEMON</Button>
    </Card>

  );
}