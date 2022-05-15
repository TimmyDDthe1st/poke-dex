import {
  Typography, Box, Modal, Container, Paper,
} from '@mui/material';

export default function InfoModal({
  setOpenModal, openModal, pokemonData,
}) {
  const { name } = pokemonData;

  const handleClick = () => {
    setOpenModal(false);
  };

  return (
    <Modal open={openModal} onClose={handleClick}>
      <Container maxWidth="md">
        <Paper variant="elevation">
          <Box>
            <Typography>POKEMON INFORMATION</Typography>
            <Typography>{name}</Typography>
          </Box>
        </Paper>
      </Container>
    </Modal>
  );
}
