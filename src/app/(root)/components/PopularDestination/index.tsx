import { Box, Container, Stack, Typography } from "@mui/material";
import style from './index.module.css';
import Image from "next/image";
import TripCard from "@/components/Ui/TripCard";

function PopularDestination() {
  const tripData = [
    {
      title: 'Trip title one',
      image: 'https://html.designingmedia.com/traveltrek/assets/images/package-box-img3.jpg',
      price: 399.99
    },
    {
      title: 'Trip title two',
      image: 'https://html.designingmedia.com/traveltrek/assets/images/package-box-img2.jpg',
      price: 499.99
    },
    {
      title: 'Trip title three',
      image: 'https://html.designingmedia.com/traveltrek/assets/images/package-box-img1.jpg',
      price: 799.99
    },
  ];

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

        <Stack mt='4rem' gap='1rem'>
          {
            tripData.map((trip, i) => <Box key={i}>
              <TripCard backgroundImage={trip.image} />
            </Box>)
          }
        </Stack>
      </Container>
    </section>
  );
}

export default PopularDestination;