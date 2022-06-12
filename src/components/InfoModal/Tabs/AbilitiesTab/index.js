import { Box, Chip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function AbilitiesTab({ abilities, abilityUrls }) {
  const [isLoading, setIsLoading] = useState(true);
  const [abilityData, setAbilityData] = useState([]);

  const getAndSetAbilityData = async () => {
    for (let i = 0; i < abilityUrls.length; i++) {
      await fetch(abilityUrls[i])
        .then((res) => res.json())
        .then((data) => setAbilityData((prevState) => [...prevState, data]));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getAndSetAbilityData();
  }, []);

  return (
    <Box>
      {abilities.map((ability, index) => (
        <Box key={ability.ability.name}>
          <Chip
            label={ability.ability.name}
            sx={{ textTransform: 'capitalize' }}
          />
          {isLoading
            ? <Typography>LOADING...</Typography>
            : <Typography>{abilityData[index].effect_entries[index].effect}</Typography>}
          (//TODO: need to get the sub object language value to decide which explanation to display)
        </Box>
      ))}
    </Box>
  );
}
