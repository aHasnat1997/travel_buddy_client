import { FindSingleTrip } from "@/services/trips/trips.action";
import { Box, Container, Typography } from "@mui/material";

async function PaymentPage({ params }: { params: { id: string } }) {
  const tripData = await FindSingleTrip(params.id);

  return (
    <Box sx={{
      background: 'linear-gradient(to top, #1ec28b17, #b1f3dd)',
      width: '100%',
      py: '4rem'
    }}>
      <Container>
        <Typography>Payment Page</Typography>
        <Typography variant="h4" fontWeight='bold'>
          {tripData?.data?.tripTitle}
        </Typography>
        <Typography variant="h5" fontWeight='bold'>
          Budget: {tripData?.data?.budget} $ / Person
        </Typography>
      </Container>
    </Box>
  );
}

export default PaymentPage;