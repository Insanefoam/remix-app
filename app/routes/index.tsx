import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import MainLayout from '~/layouts/main.layout';

export default function Index() {
  return (
    <MainLayout>
      <Box
        sx={{
          mx: 'auto',
          width: '100%',
          textAlign: 'center',
          marginTop: '60px',
        }}
      >
        <Typography variant="h2">This is simple Remix Application.</Typography>
        <Typography variant="h4">
          You can see items list and add it to the cart.
        </Typography>
      </Box>
    </MainLayout>
  );
}
