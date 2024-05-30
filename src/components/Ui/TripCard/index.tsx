import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Box, Button, Divider, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

type TCardProps = {
  title: string;
  image: string;
  price: number;
  destination: string;
  places: string;
  duration: string;
};
export default function TripCard({ cardProps }: { cardProps: TCardProps }) {
  return (
    <Card sx={{
      maxWidth: '24rem',
      p: '1rem',
      borderRadius: '1rem',
      '&:hover': {
        background: 'linear-gradient(to top, #fff, #b1f3dd)'
      }
    }}>
      <Box mb='.5rem'>
        <Stack>
          <LocationOnIcon sx={{ color: 'secondary.main' }} />
          <Typography>{cardProps.destination}</Typography>
        </Stack>
        <Typography variant='h4' color='text.main' fontWeight='bold'>{cardProps.title}</Typography>
      </Box>
      <Image
        width={500}
        height={450}
        src={cardProps.image}
        alt="trip background image"
        placeholder='blur'
        blurDataURL='https://img.freepik.com/free-vector/gray-soft-blurred-background_1034-272.jpg?w=826&t=st=1717064690~exp=1717065290~hmac=9cb3c63aa957a46be36d8be48ccaa82a014bb0fe43049970a794fa669ad51981'
        className='rounded-2xl my-6'
      />
      <Box mt='.5rem'>
        <Stack gap='1.5rem'>
          <Stack gap='.5rem'>
            <MapIcon />
            <Typography>{cardProps.places} Places</Typography>
          </Stack>
          <Stack gap='.5rem'>
            <CalendarMonthIcon />
            <Typography>{cardProps.duration} Weeks</Typography>
          </Stack>
        </Stack>
        <Divider sx={{ my: '.5rem' }} />
        <Stack justifyContent='space-between'>
          <Typography><span className='text-2xl font-bold text-[#2b2945]'>$ {cardProps.price}</span> / Person</Typography>
          <Button color="secondary">Details</Button>
        </Stack>
      </Box>
    </Card>
  );
}
