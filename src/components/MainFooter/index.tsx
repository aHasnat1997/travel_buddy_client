import assets from "@/assets";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


function Footer() {
  const quickLinks = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Services',
      path: '/'
    },
    {
      title: 'Latest News',
      path: '/'
    },
    {
      title: 'Booking',
      path: '/'
    },
    {
      title: 'Destinations',
      path: '/'
    }
  ];

  const supportLinks = [
    {
      title: 'About Us',
      path: '/'
    },
    {
      title: 'Contact Us',
      path: '/'
    },
    {
      title: 'Team',
      path: '/'
    },
    {
      title: 'FAQ',
      path: '/'
    },
    {
      title: 'Testimonial',
      path: '/'
    }
  ];

  return (
    <Box sx={{
      pt: '8rem',
      background: 'linear-gradient(to top, #1ec28b17, #b1f3dd)',
      width: '100%',
    }}>

      <Container sx={{
        position: 'relative'
      }}>
        <Box>
          <Image
            alt="Tree"
            src={assets.img.vectorTree}
            height={200}
            width={200}
            className="absolute -top-20 -left-24 -rotate-45 opacity-15"
          />
        </Box>
        <Box>
          <Image
            alt="Tree"
            src={assets.img.vectorFive}
            height={150}
            width={150}
            className="absolute bottom-0 -right-2 animate-wiggle origin-bottom hidden md:block"
          />
        </Box>
        <Box sx={{
          display: { sm: 'block', md: 'flex' },
          gap: '2.5rem',
          justifyContent: { md: 'space-between' },
        }}>
          <div className='w-full lg:w-[40%] space-y-4 pb-10 lg:pb-0'>
            <Image
              alt="Logo"
              src={assets.img.logo}
              height={200}
              width={200}
            />
            <Typography textAlign='justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempororem ipsum dolor sit am econsect ametconsectetetur adipiscing.</Typography>
          </div>

          <Grid container>
            <Grid item xs={6} sm={4}>
              <Stack direction='column' gap='2rem' className="pb-10 lg:pb-0">
                <Typography color='text.primary' fontWeight='bold'>
                  Quick Links
                </Typography>
                <Stack direction='column' gap='1rem' >
                  {
                    quickLinks.map((item, i) => <Box key={i}>
                      <div className="w-fit group">
                        <Link href={item.path} className="text-[#5f7172] group-hover:text-primary">{item.title}</Link>
                        <div className="p-[1px] bg-primary origin-left scale-0 duration-500 group-hover:scale-100"></div>
                      </div>
                    </Box>)
                  }
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Stack direction='column' gap='2rem' className="pb-10 lg:pb-0">
                <Typography color='text.primary' fontWeight='bold'>
                  Support
                </Typography>
                <Stack direction='column' gap='1rem' >
                  {
                    supportLinks.map((item, i) => <Box key={i}>
                      <div className="w-fit group">
                        <Link href={item.path} className="text-[#516263] group-hover:text-primary">{item.title}</Link>
                        <div className="p-[1px] bg-primary origin-left scale-0 duration-500 group-hover:scale-100"></div>
                      </div>
                    </Box>)
                  }
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Stack direction='column' gap='2rem' className="pb-10 lg:pb-0">
                <Typography color='text.primary' fontWeight='bold'>
                  Get in Touch
                </Typography>
                <Stack direction='column' gap='1rem' >
                  <div className="w-fit group">
                    <Typography className="text-[#516263] group-hover:text-primary">
                      <span className="text-primary font-bold">Email:</span> info@travebuddy.com
                    </Typography>
                    <div className="p-[1px] bg-primary origin-left scale-0 duration-500 group-hover:scale-100"></div>
                  </div>
                  <div className="w-fit group">
                    <Typography className="text-[#516263] group-hover:text-primary">
                      <span className="text-primary font-bold">Phone:</span> +1 234 567 89 0 0
                    </Typography>
                    <div className="p-[1px] bg-primary origin-left scale-0 duration-500 group-hover:scale-100"></div>
                  </div>
                  <div className="w-fit group">
                    <Typography className="text-[#516263] group-hover:text-primary">
                      <span className="text-primary font-bold">Fax:</span> +1 ( 987 ) 654 321 9 9
                    </Typography>
                    <div className="p-[1px] bg-primary origin-left scale-0 duration-500 group-hover:scale-100"></div>
                  </div>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Box mt='2rem' py='2rem' borderTop='1px solid #b7d5d6'>
          <Typography textAlign='center'>
            Copyright &copy;{new Date().getFullYear()} TravelBuddy.com All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;