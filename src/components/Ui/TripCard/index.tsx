import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Box, Button, Divider, Stack, Tooltip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { TCardProps } from '@/types';
import Link from 'next/link';


export default function TripCard({ cardProps }: { cardProps: TCardProps }) {
  return (
    <Card sx={{
      width: '100%',
      p: '1rem',
      borderRadius: '1rem',
      '&:hover': {
        background: 'linear-gradient(to top, #fff, #b1f3dd)'
      }
    }}>
      <Box mb='.5rem'>
        <Stack>
          <LocationOnIcon sx={{ color: 'secondary.main' }} />
          <Typography>{cardProps?.destination}</Typography>
        </Stack>
        <Tooltip title={cardProps?.title}>
          <Typography variant='h4' color='text.main' fontWeight='bold'>
            <span className='line-clamp-2'>{cardProps?.title}</span>
          </Typography>
        </Tooltip>
      </Box>
      <Image
        width={500}
        height={450}
        src={cardProps?.image}
        alt="trip background image"
        placeholder='blur'
        blurDataURL='https://img.freepik.com/free-vector/gray-soft-blurred-background_1034-272.jpg?w=826&t=st=1717064690~exp=1717065290~hmac=9cb3c63aa957a46be36d8be48ccaa82a014bb0fe43049970a794fa669ad51981'
        className='w-full h-56 rounded-2xl my-6'
      />
      <Box mt='.5rem'>
        <Stack gap='1.5rem'>
          <Stack gap='.5rem'>
            <MapIcon />
            <Typography>{cardProps?.places} Places</Typography>
          </Stack>
          <Stack gap='.5rem'>
            <CalendarMonthIcon />
            <Typography>{cardProps?.duration} Weeks</Typography>
          </Stack>
        </Stack>
        <Divider sx={{ my: '.5rem' }} />
        <Stack justifyContent='space-between'>
          <Typography><span className='text-2xl font-bold text-[#2b2945]'>$ {cardProps?.price}</span> / Person</Typography>
          <Link href={`/trips/${cardProps?.id}`}>
            <Button color="secondary">Details</Button>
          </Link>
        </Stack>
      </Box>
    </Card>
  );
}
