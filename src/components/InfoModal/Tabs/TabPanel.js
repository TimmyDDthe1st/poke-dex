import { Box } from '@mui/material';

export default function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {value === index && (
      <Box sx={{ p: 3 }} px={3} py={3}>
        {children}
      </Box>
      )}
    </Box>
  );
}
