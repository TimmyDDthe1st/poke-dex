import {
  Box, Tabs, Tab, Grid, IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useMemo, useEffect } from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import GeneralTab from './GeneralTab/index';
import StatsTab from './StatsTab';
import AbilitiesTab from './AbilitiesTab';
import TabPanel from './TabPanel';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function InfoModalTabs({ pokemonData, handleClick }) {
  const [chartData, setChartData] = useState();
  const [tabValue, setTabValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonSpeciesData, setPokemonSpeciesData] = useState([]);
  const {
    species, name, stats, abilities,
  } = pokemonData;

  const chartConfig = {
    labels: stats.map((stat) => stat.stat.name),
    datasets: [
      {
        label: 'Stat',
        data: stats.map((stat) => stat.base_stat),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Stats',
      },
    },
  };

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

  useEffect(() => {
    setChartData(chartConfig);
  }, []);

  useMemo(() => {
    getAndSetPokemonSpeciesData(species.url);
  }, [name]);

  const tabs = [
    {
      label: 'General',
    },
    {
      label: 'Stats',
    },
    {
      label: 'Abilities',
    },
  ];

  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <IconButton color="primary" aria-label="close modal" component="div" onClick={handleClick}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
          {tabs.map((tab, index) => (
            <Tab
              key={tab.label}
              label={tab.label}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      <Grid container justifyContent="center">
        <Grid item>
          <TabPanel value={tabValue} index={0}>
            <GeneralTab
              pokemonData={pokemonData}
              pokemonSpeciesData={pokemonSpeciesData}
              isLoading={isLoading}
            />
          </TabPanel>
        </Grid>
        <Grid item>
          <TabPanel value={tabValue} index={1}>
            {!isLoading && (
              <StatsTab
                chartData={chartData}
              />
            )}
          </TabPanel>
        </Grid>
        <Grid item>
          <TabPanel value={tabValue} index={2}>
            {!isLoading && (
            <AbilitiesTab
              abilities={abilities}
              abilityUrls={abilities.map((ability) => ability.ability.url)}
            />
            )}
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
}
