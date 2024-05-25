import assets from "@/assets";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import SearchBar from "./SearchBar";

function Hero() {
  const services = [
    {
      icon: assets.img.serviceOne,
      title: 'Lot of Choices',
      pera: 'Lorem ipsum dolor sit ametc onsectetur adipiscing elit sed do eiusmod tempor incididun tut labore et dolore.'
    },
    {
      icon: assets.img.serviceTwo,
      title: 'Best Tour Guide',
      pera: 'Lorem ipsum dolor sit ametc onsectetur adipiscing elit sed do eiusmod tempor incididun tut labore et dolore.'
    },
    {
      icon: assets.img.serviceThree,
      title: 'Easy Booking',
      pera: 'Lorem ipsum dolor sit ametc onsectetur adipiscing elit sed do eiusmod tempor incididun tut labore et dolore.'
    }
  ]

  return (
    <Box sx={{
      background: 'linear-gradient(to top, #1ec28b17, #b1f3dd)',
      width: '100%'
    }}>
      <Box position='absolute' left='30rem'>
        <Image
          alt="icon"
          src={assets.img.vectorOne}
          height={300}
          width={300}
          className="opacity-50"
        />
      </Box>
      <Box position='absolute' right='20rem' top='5rem'>
        <Image
          alt="icon"
          src={assets.img.vectorTwo}
          height={150}
          width={150}
          className="opacity-50 animate-wiggle"
        />
      </Box>
      <Container>
        <Stack height='85vh' alignItems='center' position='relative'>
          <Stack alignItems='start' width='50%' direction='column' gap='1rem'>
            <Typography variant="h5" color='secondary.main' fontWeight='bold'>
              Discover New Horizons!
            </Typography>
            <Typography variant="h2" color='text.primary' fontWeight='bold'>
              Let&apos;s Make Your best trip Ever!
            </Typography>
            <Typography>
              Discover amazing places at exclusive deals.
              Eat, Shop, Visit interesting places around the world.
            </Typography>
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

        <Box py='5rem'>
          <Stack>
            <Box width='60%'>
              <Typography variant="h5" color='secondary.main' fontWeight='bold'>
                WHAT WE SERVE
              </Typography>
              <Typography variant="h2" color='text.primary' fontWeight='bold' textAlign='right' mr='15rem'>
                TOP VALUES <br /> FOR YOU!
              </Typography>
            </Box>
            <Box width='40%'>
              <Image
                alt="Icon"
                src={assets.img.vectorFour}
                width={1000}
                height={1000}
              />
            </Box>
          </Stack>
          <Stack justifyContent='center' gap='2rem'>
            {
              services.map((service, i) => <Stack
                key={i}
                direction='column'
                alignItems='center'
                gap='1rem'
                padding={8}
                mt={6 * i}
                className="rounded-xl bg-gradient-to-t from-[#1ec28b00] to-[#b1f3dd] group duration-500 hover:to-primary/40"
              >
                <Image
                  alt="Icon"
                  src={service.icon}
                  width={100}
                  height={100}
                />
                <Typography textAlign='center' variant='h5' fontWeight='bold' className='text-[#2b2945] group-hover:text-primary'>
                  {service.title}
                </Typography>
                <Typography textAlign='center'>{service.pera}</Typography>
              </Stack>)
            }
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;