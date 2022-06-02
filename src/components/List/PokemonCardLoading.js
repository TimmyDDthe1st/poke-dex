import { Stack, Skeleton } from '@mui/material';

import { SPRITE_SIZE } from '../../helpers/spriteSize';

export default function PokemonCardLoading() {
  return (
    <Stack>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={SPRITE_SIZE} height={SPRITE_SIZE} />
      <Skeleton variant="text" />
    </Stack>
  );
}
