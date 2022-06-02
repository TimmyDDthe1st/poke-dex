/* eslint-disable camelcase */
import { styled } from '@mui/system';
import {
  Box, Typography, Chip, Stack, Avatar, Skeleton,
} from '@mui/material';

import { SPRITE_SIZE } from '../../List/Card';

export default function GeneralTab({ pokemonData, pokemonSpeciesData, isLoading }) {
  const {
    name, sprites, types,
  } = pokemonData;

  const { shape, habitat, capture_rate } = pokemonSpeciesData;

  const StyledChip = styled(Chip, {
    shouldForwardProp: (prop) => prop !== 'backgroundColorType',
  })(({ backgroundColorType, theme }) => ({
    backgroundColor: theme.palette.pokemonType[backgroundColorType],
    color: theme.palette.pokemonType.contrastText,
    textTransform: 'capitalize',
  }));

  const StyledTypography = styled(Typography)({
    textTransform: 'capitalize',
  });

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-around" px={3}>
      <Box flexDirection="column">
        <StyledTypography
          variant="h4"
        >
          {name}
        </StyledTypography>
        {isLoading
          ? <Skeleton variant="circular" width={SPRITE_SIZE} height={SPRITE_SIZE} />
          : (
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
          )}

      </Box>
      <Box flexDirection="column" px={3} py={3}>
        <Box flexDirection="row">
          <Stack direction="row" spacing={1}>
            {types.map((type) => (
              <StyledChip
                key={type.type.name}
                backgroundColorType={type.type.name}
                label={type.type.name}
              />
            ))}
          </Stack>
        </Box>
        <Box mt={3}>
          <StyledTypography>
            Shape:&nbsp;
            {shape && shape.name}
          </StyledTypography>
        </Box>
        <Box mt={3}>
          <StyledTypography>
            Habitat:&nbsp;
            {habitat.name !== ''
              ? habitat.name
              : 'No habitat found'}
          </StyledTypography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <StyledTypography gutterBottom>Capture Rate</StyledTypography>
        {isLoading
          ? <Skeleton variant="circular" width={SPRITE_SIZE} height={SPRITE_SIZE} />
          : (
            <Avatar sx={{
              bgcolor: (theme) => theme.palette.primary.main,
              width: SPRITE_SIZE,
              height: SPRITE_SIZE,
              fontSize: '3rem',
            }}
            >
              {capture_rate}
            </Avatar>
          )}
      </Box>
    </Box>

  );
}
