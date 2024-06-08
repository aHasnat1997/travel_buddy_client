import { Container, Stack, Typography } from "@mui/material";
import style from './index.module.css';
import Carousel from "./Carousel";
import { FindAllTrips } from "@/services/trips/trips.action";
import { getWeekDifference } from "@/utils/getWeekDifference";

async function PopularDestination() {
  const allTrips = await FindAllTrips();

  const tripData = allTrips?.data?.map((trip: any) => ({
    title: trip?.tripTitle,
    image: trip?.tripImage[0],
    price: trip?.budget,
    destination: trip?.destination,
    places: trip?.activities?.length,
    duration: getWeekDifference(trip?.startDate, trip?.endDate)
  }));

  return (
    <section className={style.backgroundImage}>
      <Container>
        <Stack width='100%' alignItems='center' direction='column' gap='1rem'>
          <Typography variant="h5" color='secondary.main' fontWeight='bold' sx={{ fontSize: { xs: '1.2rem', sm: '1.6rem' } }}>
            EXPLORE WONDERFUL EXPERIENCE
          </Typography>
          <Typography variant="h2" color='#fff' fontWeight='bold' sx={{ fontSize: { xs: '2.5rem', sm: '3rem' } }}>
            Visit Popular Destinations in the World
          </Typography>
        </Stack>

        <Stack justifyContent='center' mt='2rem' position='relative'>
          <Carousel tripsData={tripData} />
        </Stack>
      </Container>
    </section>
  );
}

export default PopularDestination;