import Image from "next/image";
import { Box, Container, Stack, Typography } from "@mui/material";
import assets from "@/assets";
import TestimonialsCarousel from "./TestimonialsCarousel";

function Testimonials() {
  return (
    <Box sx={{
      width: '100%',
      py: '8rem',
      background: 'linear-gradient(to top,  #b1f3dd, #1ec28b17)',
    }}>
      <Container>
        <Stack width='100%' justifyContent='space-between'>
          <Box sx={{
            width: { xs: '0', sm: '30%' },
            display: { xs: 'none', sm: 'block' }
          }}>
            <Image
              alt="Icon"
              src={assets.img.vectorFour}
              width={1000}
              height={1000}
            />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '70%' } }}>
            <Typography variant="h5" color='secondary.main' fontWeight='bold' sx={{
              textAlign: { xs: 'left', md: 'center  ' },
              fontSize: { xs: '1.2rem', sm: '1.6rem' }
            }}>
              REVIEW & TESTIMONIALS
            </Typography>
            <Typography variant="h2" color='text.primary' fontWeight='bold' sx={{
              textAlign: { xs: 'left', md: 'right' },
              fontSize: { xs: '2.5rem', sm: '3rem' }
            }}>
              What Our Customers Are Saying About Us
            </Typography>
          </Box>
        </Stack>
        <Box mt='3rem'>
          <TestimonialsCarousel />
        </Box>
      </Container>
    </Box>
  );
}

export default Testimonials;