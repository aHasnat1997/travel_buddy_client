import { FindSingleTrip } from "@/services/trips/trips.action";
import { dateFormate } from "@/utils/dateFormate";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import GalleryCarousel from "./component/galleryCarousel";
import Link from "next/link";

async function SingleTripPage({ params }: { params: { id: string } }) {
  const tripData = await FindSingleTrip(params.id);

  return (
    <Box sx={{
      background: 'linear-gradient(to top, #1ec28b17, #b1f3dd)',
      width: '100%',
      py: '4rem'
    }}>
      <Container>
        <Stack gap='2rem' sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <GalleryCarousel images={tripData?.data.tripImage} />
          </Box>
          <Stack width='100%' direction='column' gap='1rem'>
            <Typography variant="h4" fontWeight='bold'>
              {tripData?.data?.tripTitle}
            </Typography>
            <Typography variant="h5" fontWeight='bold'>
              Budget: {tripData?.data?.budget} $ / Person
            </Typography>
            <Stack width='100%' justifyContent='space-between'>
              <Typography variant="h6" fontWeight='bold'>
                Trip Start: {dateFormate(tripData?.data?.startDate)}
              </Typography>
              <Typography variant="h6" fontWeight='bold' textAlign='right'>
                Trip End: {dateFormate(tripData?.data?.endDate)}
              </Typography>
            </Stack>
            <Stack width='100%' justifyContent='space-between'>
              <Typography variant="h6" fontWeight='bold'>
                Trip Start From: {tripData?.data?.startingPoint}
              </Typography>
              <Typography variant="h6" fontWeight='bold' textAlign='right'>
                Trip Destination: {tripData?.data?.destination}
              </Typography>
            </Stack>
            <Stack width='100%' justifyContent='space-between'>
              <Typography variant="h6" fontWeight='bold'>
                Total Slots: {tripData?.data?.totalSlots}
              </Typography>
              <Typography variant="h6" fontWeight='bold' textAlign='right'>
                Total Booked: {tripData?.data?.totalBooked}
              </Typography>
            </Stack>
            <Typography variant="h6" fontWeight='bold' textAlign='justify'>
              Activities: {tripData?.data?.activities.join(',')}
            </Typography>
            <Link href={`/payment/${params.id}`} className='w-fit'>
              <Button color="secondary">Book this Trip</Button>
            </Link>
          </Stack>
        </Stack>

        <Typography textAlign='justify' mt='4rem'>
          {tripData.data.tripDetails}
        </Typography>

      </Container>
    </Box>
  );
}

export default SingleTripPage;