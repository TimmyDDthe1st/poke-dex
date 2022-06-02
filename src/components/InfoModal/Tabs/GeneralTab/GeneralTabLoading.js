/* eslint-disable import/prefer-default-export */
import {
  Skeleton, Box,
} from '@mui/material';

import { SPRITE_SIZE } from '../../../../helpers/spriteSize';

export function TextImageLoading() {
  return (
    <Box flexDirection="column">
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={SPRITE_SIZE} height={SPRITE_SIZE} />
    </Box>
  );
}

export function TextTextTextLoading() {
  return (
    <Box flexDirection="column" pt={3} justifyContent="space-between">
      <Skeleton width={SPRITE_SIZE} />
      <Skeleton width={SPRITE_SIZE} />
      <Skeleton width={SPRITE_SIZE} />
    </Box>
  );
}
