import { FindSingleTrip } from "@/services/trips/trips.action";
import { dateFormate } from "@/utils/dateFormate";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

async function SingleTripPage({ params }: { params: { id: string } }) {
  const tripData = await FindSingleTrip(params.id);

  console.log(':------>', tripData);
  return (
    <Box sx={{
      background: 'linear-gradient(to top, #1ec28b17, #b1f3dd)',
      width: '100%',
      py: '4rem'
    }}>
      <Container>
        <Stack gap='4rem'>
          <Box width='100%'>
            <Image
              alt="Trip Image"
              src={tripData?.data?.tripImage[0]}
              width={800}
              height={800}
              className="w-full"
            />
          </Box>
          <Stack width='100%' direction='column' gap='1rem'>
            <Typography variant="h3" fontWeight='bold'>
              {tripData?.data?.tripTitle}
            </Typography>
            <Typography variant="h5" fontWeight='bold'>
              Budget: {tripData?.data?.budget} $ / Person
            </Typography>
            <Stack gap='4rem'>
              <Typography variant="h6" fontWeight='bold'>
                Trip Start: {dateFormate(tripData?.data?.startDate)}
              </Typography>
              <Typography variant="h6" fontWeight='bold'>
                Trip End: {dateFormate(tripData?.data?.endDate)}
              </Typography>
            </Stack>
            <Stack gap='4rem'>
              <Typography variant="h6" fontWeight='bold'>
                Trip Start From: {tripData?.data?.startingPoint}
              </Typography>
              <Typography variant="h6" fontWeight='bold'>
                Trip Destination: {tripData?.data?.destination}
              </Typography>
            </Stack>
            <Stack gap='4rem'>
              <Typography variant="h6" fontWeight='bold'>
                Total Slots: {tripData?.data?.totalSlots}
              </Typography>
              <Typography variant="h6" fontWeight='bold'>
                Total Booked: {tripData?.data?.totalBooked}
              </Typography>
            </Stack>
            <Typography variant="h6" fontWeight='bold'>
              Activities: {tripData?.data?.activities.join(',')}
            </Typography>
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