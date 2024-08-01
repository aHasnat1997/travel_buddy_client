import TripCard from "@/components/Ui/TripCard";
import { FindAllTrips } from "@/services/trips/trips.action";
import { getWeekDifference } from "@/utils/getWeekDifference";
import { Box, Container, Grid } from "@mui/material";

async function AllTripPage() {
  const allTripData = await FindAllTrips();

  const tripData = allTripData?.data?.map((trip: any) => ({
    id: trip?.id,
    title: trip?.tripTitle,
    image: trip?.tripImage[0],
    price: trip?.budget,
    destination: trip?.destination,
    places: trip?.activities?.length,
    duration: getWeekDifference(trip?.startDate, trip?.endDate)
  }));

  return (
    <Box sx={{
      background: 'linear-gradient(to top, #1ec28b17, #b1f3dd)',
      width: '100%',
      py: '4rem'
    }}>
      <Container>
        <Grid container spacing='2rem'>
          {
            tripData.map((trip: any) => <Grid item xs={12} sm={4} key={trip.id}>
              <TripCard cardProps={trip} />
            </Grid>)
          }
        </Grid>
      </Container>
    </Box>
  );
}

export default AllTripPage;