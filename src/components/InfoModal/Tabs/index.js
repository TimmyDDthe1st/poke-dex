/* eslint-disable react/jsx-props-no-spreading */
import {
  Box, Tabs, Tab,
} from '@mui/material';
import { useState, useMemo } from 'react';

import GeneralTab from './GeneralTab/index';
import StatsTab from './StatsTab';
import TabPanel from './TabPanel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function InfoModalTabs({ pokemonData }) {
  const [tabValue, setTabValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonSpeciesData, setPokemonSpeciesData] = useState([]);
  const { species, name } = pokemonData;

  const handleChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const getAndSetPokemonSpeciesData = async (speciesUrl) => {
    setIsLoading(true);
    await fetch(speciesUrl)
      .then((res) => res.json())
      .then((data) => setPokemonSpeciesData(data));
    setIsLoading(false);
  };

  useMemo(() => getAndSetPokemonSpeciesData(species.url), [name]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Stats" {...a11yProps(1)} />
          <Tab label="Moves" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
        <GeneralTab
          pokemonData={pokemonData}
          pokemonSpeciesData={pokemonSpeciesData}
          isLoading={isLoading}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <StatsTab
          stats={pokemonData.stats}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
