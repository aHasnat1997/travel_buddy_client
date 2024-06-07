import TripCard from "@/components/Ui/TripCard";
import { FindAllTrips } from "@/services/trips/trips.action";
import { Box, Container, Grid, Typography } from "@mui/material";

async function AllTripPage() {
  const allTripData = await FindAllTrips();

  function getWeekDifference(date1: string, date2: string): number {
    const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;

    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const differenceInMilliseconds = Math.abs(d1.getTime() - d2.getTime());
    const differenceInWeeks = Math.ceil(differenceInMilliseconds / millisecondsPerWeek);

    return differenceInWeeks;
  };

  const tripData = allTripData?.data?.map((trip: any) => ({
    title: trip?.tripTitle,
    image: trip?.tripImage[0],
    price: trip?.budget,
    destination: trip?.destination,
    places: trip?.activities?.length,
    duration: getWeekDifference(trip?.startDate, trip?.endDate)
  }));

  return (
    <Container>
      <Grid container py='4rem' spacing='2rem'>
        {
          tripData.map((trip: any) => <Grid item xs={12} sm={4} key={trip.id}>
            <TripCard cardProps={trip} />
          </Grid>)
        }
      </Grid>
    </Container>
  );
}

export default AllTripPage;