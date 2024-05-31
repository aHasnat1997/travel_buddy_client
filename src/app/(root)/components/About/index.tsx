import assets from "@/assets";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function About() {
  const aboutList = [
    'Forem commodo dolor sit amet consectetur adipis.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna.',
    'Ipsum suspen disse ultrices gravida risus commodo viverra.'
  ];

  const aboutData = [
    {
      count: 2,
      title: 'Years Experience'
    },
    {
      count: 45,
      title: 'Destination Collaboration'
    },
    {
      count: 100,
      title: 'Happy Customers'
    },
  ];

  return (
    <Box sx={{
      pt: '5rem',
      pb: '10rem',
      background: 'linear-gradient(to top, #1ec28b17, #b1f3dd)',
      width: '100%'
    }}>
      <Container sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '5rem',
        position: 'relative'
      }}>
        <Box sx={{ position: 'absolute', top: '-5rem', right: { xs: '35%', sm: '70%', md: '1rem' } }}>
          <Image
            alt="icon"
            src={assets.img.vectorOne}
            height={300}
            width={300}
            className="opacity-50 w-56"
          />
        </Box>
        <Box sx={{ position: 'absolute', bottom: { xs: '-4rem', md: '-8rem' }, left: { xs: '50%', sm: '60%', md: '1rem' } }}>
          <Image
            alt="icon"
            src={assets.img.vectorTwo}
            height={150}
            width={150}
            className="opacity-50 animate-wiggle"
          />
        </Box>
        <Box sx={{
          width: { xs: '100%', md: '40%' },
        }} >
          <Box position='relative'>
            <Box bgcolor='#fff' p='.8rem' borderRadius='1rem' boxShadow='5px 5px 25px #1ec28b' sx={{
              display: { xs: 'none', md: 'block' }
            }}>
              <Image
                alt="about image"
                src={assets.img.aboutOne}
                width={800}
                height={800}
              />
            </Box>
            <Box bgcolor='#fff' p='.8rem' borderRadius='1rem' boxShadow='5px 5px 25px #1ec28b' sx={{
              position: 'absolute',
              bottom: '-5rem',
              right: '-3rem',
              display: { xs: 'none', md: 'block' }
            }}>
              <Image
                alt="about image"
                src={assets.img.aboutTwo}
                width={200}
                height={200}
              />
            </Box>
          </Box>
        </Box>
        <Stack direction='column' gap='2rem' sx={{ width: { xs: '100%', md: '60%' } }}>
          <Stack width='100%' direction='column' gap='1rem'>
            <Typography variant="h5" color='secondary.main' fontWeight='bold' sx={{ fontSize: { xs: '1.2rem', sm: '1.6rem' } }}>
              ABOUT TRAVEL BUDDY
            </Typography>
            <Typography variant="h2" color='text.primary' fontWeight='bold' sx={{ fontSize: { xs: '2.5rem', sm: '3rem' } }}>
              World Best Travel Agency Company.
            </Typography>
            <Typography>
              Discover amazing places at exclusive deals. Eat, Shop, Visit interesting places around the world. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaquis.
            </Typography>
          </Stack>
          <Stack direction='column' gap='.5rem'>
            {
              aboutList.map((item, i) => <Stack key={i} gap='.5rem'>
                <CheckCircleIcon sx={{ color: 'secondary.main' }} />
                <Typography>{item}</Typography>
              </Stack>)
            }
          </Stack>
          <Stack justifyContent='space-between'>
            {
              aboutData.map((data, i) => <Box key={i}>
                <Typography variant="h2" color='primary.main' fontWeight='bold' sx={{ fontSize: { xs: '2.5rem', sm: '3rem' } }}>
                  {data.count}+
                </Typography>
                <Typography sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>{data.title}</Typography>
              </Box>)
            }
          </Stack>
          <Box>
            <Button size="large">Find Tours</Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;