import { Box } from '@mui/material';

import Chart from './Chart';

export default function StatsTab({ chartData }) {
  return (
    <Box>
      <Chart chartData={chartData} />
    </Box>
  );
}
