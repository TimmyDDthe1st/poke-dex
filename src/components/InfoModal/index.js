import {
  Box, Modal, Container, Paper,
} from '@mui/material';

import InfoModalTabs from './Tabs';

export default function InfoModal({
  setOpenModal, openModal, pokemonData,
}) {
  const handleClick = () => {
    setOpenModal(false);
  };

  return (
    <Modal open={openModal} onClose={handleClick}>
      <Container maxWidth="md">
        <Box marginTop={5}>
          <Paper variant="elevation">
            <Box display="flex" flexDirection="column" justifyContent="center" py={3} px={3}>
              <InfoModalTabs pokemonData={pokemonData} handleClick={handleClick} />
            </Box>
          </Paper>
        </Box>
      </Container>
    </Modal>
  );
}
