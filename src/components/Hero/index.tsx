import assets from "@/assets";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import SearchBar from "./SearchBar";

function Hero() {
  return (
    <Box sx={{
      background: 'linear-gradient(to top, #1ec28b17, #b1f3dd)',
      width: '100%'
    }}>
      <Box position='absolute' left='30rem'>
        <Image
          alt="icon"
          src={assets.img.vectorOne}
          height={200}
          width={200}
          className="opacity-50"
        />
      </Box>
      <Box position='absolute' right='20rem' top='5rem'>
        <Image
          alt="icon"
          src={assets.img.vectorTwo}
          height={150}
          width={150}
          className="opacity-50"
        />
      </Box>
      <Container>
        <Stack height='80vh' alignItems='center' position='relative'>
          <Stack alignItems='start' width='50%' direction='column' gap='1rem'>
            <Typography variant="h5" color='primary.main' fontWeight='bold'>
              Discover New Horizons!
            </Typography>
            <Typography variant="h2" color='#2b2945' fontWeight='bold'>
              Let&apos;s Make Your best trip Ever!
            </Typography>
            <Typography color='#88a1a3'>
              Discover amazing places at exclusive deals.
              Eat, Shop, Visit interesting places around the world.
            </Typography>
            {/* <Button size="large">
              Explore Now
            </Button> */}
            <Box
              width='80%'
              position='absolute'
              bottom='2rem'
            >
              <SearchBar />
            </Box>
          </Stack>
          <Box width='50%'>
            <Image
              alt="Banner Image"
              src={assets.img.heroImg}
              height={1500}
              width={1500}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;