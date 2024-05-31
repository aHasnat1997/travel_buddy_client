import assets from "@/assets";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
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
      <Container sx={{ position: 'relative' }}>
        <Box position='absolute' left='-4rem' sx={{ display: { xs: 'none', sm: 'block' } }}>
          <div data-aos="fade-right">
            <Image
              alt="icon"
              src={assets.img.vectorOne}
              height={300}
              width={300}
              className="opacity-50 w-40 lg:w-80"
            />
          </div>
        </Box>
        <Box position='absolute' right='4rem' top='5rem' sx={{ display: { xs: 'none', sm: 'block' } }}>
          <div data-aos="fade-up">
            <Image
              alt="icon"
              src={assets.img.vectorTwo}
              height={150}
              width={150}
              className="opacity-50 animate-wiggle"
            />
          </div>
        </Box>
        <Box position='relative' sx={{
          height: { xs: '', sm: '85vh' },
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Stack alignItems='start' direction='column' gap='1rem' sx={{ width: { xs: '100%', sm: '50%' } }}>
            <Typography variant="h5" color='secondary.main' fontWeight='bold' sx={{ fontSize: { xs: '1.2rem', sm: '1.6rem' } }}>
              Discover New Horizons!
            </Typography>
            <Typography variant="h2" color='text.primary' fontWeight='bold' sx={{ fontSize: { xs: '2.5rem', sm: '3rem' } }}>
              Let&apos;s Make Your best trip Ever!
            </Typography>
            <Typography>
              Discover amazing places at exclusive deals.
              Eat, Shop, Visit interesting places around the world.
            </Typography>
          </Stack>
          <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
            <Image
              alt="Banner Image"
              src={assets.img.heroImg}
              height={1500}
              width={1500}
              className="my-8 md:my-0"
            />
          </Box>
          <Box
            sx={{
              width: { xs: '100%', sm: '70%' },
              position: 'absolute',
              bottom: { xs: '15rem', sm: '0' },
            }}
          >
            <div data-aos="fade-up">
              <SearchBar />
            </div>
          </Box>
        </Box>

        <Box py='5rem'>
          <Stack>
            <Box sx={{ width: { xs: '100%', sm: '70%' } }}>
              <Typography variant="h5" color='secondary.main' fontWeight='bold' sx={{ fontSize: { xs: '1.2rem', sm: '1.6rem' } }}>
                WHAT WE SERVE
              </Typography>
              <Typography variant="h2" color='text.primary' fontWeight='bold' sx={{
                textAlign: { xs: 'center', md: 'right' },
                mr: { xs: '0', md: '12rem' },
                fontSize: { xs: '1.5rem', sm: '3rem' }
              }}>
                TOP VALUES FOR YOU!
              </Typography>
            </Box>
            <Box sx={{
              width: { xs: '0', sm: '30%' },
              display: { xs: 'none', sm: 'block' }
            }}>
              <div data-aos="fade-left">
                <Image
                  alt="Icon"
                  src={assets.img.vectorFour}
                  width={1000}
                  height={1000}
                />
              </div>
            </Box>
          </Stack>
          <Grid container mt='1rem' justifyContent='center' gap='1.5rem'>
            {
              services.map((service, i) => <Grid item key={i} xs={12} md={3}>
                <div data-aos="fade-up">
                  <Stack
                    direction='column'
                    alignItems='center'
                    gap='1rem'
                    py='2rem'
                    px='1rem'
                    mt={6 * i}
                    className={`rounded-xl bg-gradient-to-t from-[#1ec28b00] to-[#b1f3dd] group duration-500 hover:to-primary/40`}
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
                  </Stack>
                </div>
              </Grid>)
            }
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;