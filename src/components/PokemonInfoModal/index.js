import {
  Typography, Box, Modal, Container, Paper,
} from '@mui/material';

export default function InfoModal({
  setOpenModal, openModal, pokemonData,
}) {
  const { name, sprites } = pokemonData;

  const handleClick = () => {
    setOpenModal(false);
  };

  return (
    <Modal open={openModal} onClose={handleClick}>
      <Container maxWidth="md">
        <Box marginTop={5}>
          <Paper variant="elevation">
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography>POKEMON INFORMATION</Typography>
              <Box
                component="img"
                sx={{
                  height: 128,
                  width: 128,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt={name}
                src={sprites.front_default}
              />
              <Typography>{name}</Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Modal>
  );
}
