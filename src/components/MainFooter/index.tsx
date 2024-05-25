import assets from "@/assets";
import { Box, Container, Stack, Typography } from "@mui/material";
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
      position: 'relative'
    }}>
      <Box>
        <Image
          alt="Tree"
          src={assets.img.vectorTree}
          height={300}
          width={300}
          className="absolute top-8 left-14 -rotate-45 opacity-25"
        />
      </Box>
      <Box>
        <Image
          alt="Tree"
          src={assets.img.vectorFive}
          height={300}
          width={300}
          className="absolute bottom-0 right-14 animate-wiggle origin-bottom"
        />
      </Box>
      <Container>
        <Stack justifyContent='space-between'>
          <Stack width='40%' direction='column' gap='2rem'>
            <Image
              alt="Logo"
              src={assets.img.logo}
              height={200}
              width={200}
            />
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempororem ipsum dolor sit am econsect ametconsectetetur adipiscing.</Typography>
          </Stack>

          <Stack direction='column' gap='2rem'>
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

          <Stack direction='column' gap='2rem'>
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

          <Stack direction='column' gap='2rem'>
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
        </Stack>

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