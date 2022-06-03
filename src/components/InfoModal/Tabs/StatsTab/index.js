import { Typography, Box } from '@mui/material';

import HpIcon from '../../../../images/stats/hp.png';
import AttackIcon from '../../../../images/stats/attack.png';
import DefenseIcon from '../../../../images/stats/defense.png';
import SpecialAttackIcon from '../../../../images/stats/special-attack.png';
import SpecialDefenseIcon from '../../../../images/stats/special-defense.png';
import SpeedIcon from '../../../../images/stats/speed.png';

export default function StatsTab({ stats }) {
  const statIcon = [
    HpIcon,
    AttackIcon,
    DefenseIcon,
    SpecialAttackIcon,
    SpecialDefenseIcon,
    SpeedIcon,
  ];
  return (
    stats.map((stat, index) => (
      <Box display="flex" key={stat.stat.name} flexDirection="row">
        <Box
          component="img"
          sx={{
            height: 30,
            width: 30,
          }}
          alt={stat.stat.name}
          src={statIcon[index]}
        />
        <Typography>
          {stat.stat.name}
          :
        </Typography>
        <Typography>{stat.base_stat}</Typography>
        <Typography>Effort:</Typography>
        <Typography>{stat.effort}</Typography>
      </Box>
    ))
  );
}
