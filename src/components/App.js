import {
  Container, Box, Grid,
} from '@mui/material';

import Router from './Router';
import HeaderImage from '../images/app-container/header-image.png';

function App() {
  return (
    <Container maxWidth="md">
      <Grid container justifyContent="center">
        <Grid item>
          <Box
            component="img"
            sx={{ width: 128 }}
            alt="Pokemon text"
            src={HeaderImage}
          />
        </Grid>
        <Grid item>
          <Router />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
