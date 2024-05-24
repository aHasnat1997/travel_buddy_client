import assets from "@/assets";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { MdMedicalServices, MdVideoChat } from "react-icons/md";

function Hero() {
  type TCartData = {
    icon: React.ReactNode,
    title: string,
    paragraph: string
  };
  const cardData: TCartData[] = [
    {
      icon: <FaUserDoctor />,
      title: 'Qualified Doctors',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: <FaAmbulance />,
      title: 'Emergency Care',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: <MdVideoChat />,
      title: 'Live Video Chat',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: <MdMedicalServices />,
      title: '24 Hours Service',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ];

  return (
    <Box sx={{ position: 'relative' }}>
      <div className="relative">
        <Image
          alt="Bg Image"
          src={assets.img.heroImg}
          height={2000}
          width={2000}
          className="h-[95vh] w-full ml-auto"
        />
        <Image
          alt="Bg Image"
          src={assets.img.heroImgShape}
          height={1500}
          width={1500}
          className="h-[95vh] w-full absolute top-0"
        />
      </div>
      <div className="w-full h-[95vh] absolute top-10 z-40 pt-44">
        <Container>
          <Stack direction='column' alignItems='flex-start' spacing='2rem' sx={{ width: '50%' }}>
            <h1 className="text-4xl font-semibold">
              Providing Quality Health Care. Your Health is Our Top Priority with <span className="text-primary">Comprehensive</span>
            </h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <Button>Appointment Now</Button>
          </Stack>
        </Container>
      </div>
      <div className="w-full absolute z-40 bottom-0">
        <Container>
          <Stack justifyContent='space-between' spacing='1rem'>
            {
              cardData.map((data, i) => <div
                key={i}
                className="relative bg-white shadow-[0_0_1.5rem_rgba(0,0,0,0.1)] rounded-[.5rem_2rem] duration-500 group hover:-translate-y-4 hover:bg-primary hover:text-white"
              >
                {/* <div className="bg-primary w-full h-full rounded-[.5rem_2rem]" /> */}
                <Stack
                  direction='column'
                  alignItems='center'
                  spacing={2}
                  sx={{ padding: '1.5rem 2rem' }}
                >
                  <h2 className="text-4xl text-primary group-hover:text-white">{data.icon}</h2>
                  <h4 className="text-xl font-semibold">{data.title}</h4>
                  <p className="text-justify text-sm">{data.paragraph}</p>
                </Stack>
              </div>)
            }
          </Stack>
        </Container>
      </div>
    </Box>
  );
}

export default Hero;  