import assets from "@/assets";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import style from "./index.module.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa6";

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
    <footer className={style.backgroundImage}>
      <Box sx={{
        pt: '8rem',
        width: '100%',
        overflow: 'hidden'
      }}>

        <Container sx={{
          position: 'relative'
        }}>
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
              <Typography textAlign='justify' color='#fff'>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempororem ipsum dolor sit am econsect ametconsectetetur adipiscing.</Typography>
              <Stack gap='1rem'>
                <FaFacebook className="text-white text-4xl" />
                <FaInstagram className="text-white text-4xl" />
                <FaWhatsapp className="text-white text-4xl" />
                <FaTelegram className="text-white text-4xl" />
              </Stack>
            </div>

            <Grid container>
              <Grid item xs={6} sm={4}>
                <Stack direction='column' gap='2rem' className="pb-10 lg:pb-0">
                  <Typography color='#fff' fontWeight='bold'>
                    Quick Links
                  </Typography>
                  <Stack direction='column' gap='1rem' >
                    {
                      quickLinks.map((item, i) => <Box key={i}>
                        <div className="w-fit group">
                          <Link href={item.path} className="text-[#fff] group-hover:text-primary">{item.title}</Link>
                          <div className="p-[1px] bg-primary origin-left scale-0 duration-500 group-hover:scale-100"></div>
                        </div>
                      </Box>)
                    }
                  </Stack>
                </Stack>
              </Grid>

              <Grid item xs={6} sm={4}>
                <Stack direction='column' gap='2rem' className="pb-10 lg:pb-0">
                  <Typography color='#fff' fontWeight='bold'>
                    Support
                  </Typography>
                  <Stack direction='column' gap='1rem' >
                    {
                      supportLinks.map((item, i) => <Box key={i}>
                        <div className="w-fit group">
                          <Link href={item.path} className="text-[#fff] group-hover:text-primary">{item.title}</Link>
                          <div className="p-[1px] bg-primary origin-left scale-0 duration-500 group-hover:scale-100"></div>
                        </div>
                      </Box>)
                    }
                  </Stack>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Stack direction='column' gap='2rem' className="pb-10 lg:pb-0">
                  <Typography color='#fff' fontWeight='bold'>
                    Get in Touch
                  </Typography>
                  <Stack direction='column' gap='1rem' >
                    <div className="w-fit group">
                      <Typography className="text-[#fff] group-hover:text-primary">
                        <span className="text-primary font-bold">Email:</span> info@travebuddy.com
                      </Typography>
                      <div className="p-[1px] bg-primary origin-left scale-0 duration-500 group-hover:scale-100"></div>
                    </div>
                    <div className="w-fit group">
                      <Typography className="text-[#fff] group-hover:text-primary">
                        <span className="text-primary font-bold">Phone:</span> +1 234 567 89 0 0
                      </Typography>
                      <div className="p-[1px] bg-primary origin-left scale-0 duration-500 group-hover:scale-100"></div>
                    </div>
                    <div className="w-fit group">
                      <Typography className="text-[#fff] group-hover:text-primary">
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
            <Typography textAlign='center' color='#fff'>
              Copyright &copy;{new Date().getFullYear()} TravelBuddy.com All Rights Reserved
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;