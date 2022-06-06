/* eslint-disable camelcase */
import { styled } from '@mui/system';
import {
  Box, Typography, Chip, Stack, Avatar,
} from '@mui/material';

import { SPRITE_SIZE } from '../../../../helpers/spriteSize';
import { TextImageLoading, TextTextTextLoading } from './GeneralTabLoading';

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
      {isLoading
        ? <TextImageLoading />
        : (
          <Box flexDirection="column">
            <StyledTypography
              variant="h4"
            >
              {name}
            </StyledTypography>
            <Box
              component="img"
              sx={{
                height: SPRITE_SIZE,
                width: SPRITE_SIZE,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt={name}
              src={sprites.front_default}
            />
          </Box>
        )}
      {isLoading
        ? <TextTextTextLoading />
        : (
          <Box flexDirection="column">
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
        )}

      <Box display="flex" flexDirection="column" alignItems="center">
        {isLoading
          ? <TextImageLoading />
          : (
            <>
              <StyledTypography gutterBottom>Capture Rate</StyledTypography>
              <Avatar sx={{
                bgcolor: (theme) => theme.palette.primary.main,
                width: SPRITE_SIZE,
                height: SPRITE_SIZE,
                fontSize: '3rem',
              }}
              >
                {capture_rate}
              </Avatar>
            </>
          )}
      </Box>
    </Box>

  );
}
