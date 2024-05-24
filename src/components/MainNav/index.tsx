import assets from "@/assets";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import NavButton from "./NavButton";

function MainNav() {
  type TNavContent = {
    title: string;
    path: string;
  };
  const navContent: TNavContent[] = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About',
      path: '/'
    },
    {
      title: 'Department',
      path: '/'
    },
    {
      title: 'Service',
      path: '/'
    },
    {
      title: 'Price',
      path: '/'
    },
    {
      title: 'Contact',
      path: '/'
    }
  ];

  return (
    <Container sx={{ padding: '1rem 0' }}>
      <Stack justifyContent='space-between' alignItems='center'>
        <Box>
          <Image
            alt="Logo"
            src={assets.img.logo}
            height={120}
            width={120}
          />
        </Box>
        <Stack spacing='4rem'>
          {
            navContent.map((item, i) => <Box key={i}>
              <div className="w-fit group">
                <Link href={item.path} className="group-hover:text-primary">{item.title}</Link>
                <div className="p-[1px] bg-primary origin-left scale-0 duration-500 group-hover:scale-100"></div>
              </div>
            </Box>)
          }
        </Stack>
        <NavButton />
      </Stack>
    </Container>
  );
}

export default MainNav;