'use client';

import assets from "@/assets";
import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import NavButton from "./NavButton";
import NavDrawer from "./NavDrawer";
import { useEffect, useState } from "react";

function MainNav() {
  // making sticky nav after scroll 
  const [sticky, setSticky] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 720) {
        setSticky(true);
      }
      else {
        setSticky(false);
      }
    })
  }, [])

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
      path: '#about-section'
    },
    {
      title: 'All Trips',
      path: '/trips'
    },
    {
      title: 'Service',
      path: '/'
    },
    {
      title: 'Contact',
      path: '/'
    }
  ];

  const FullScreenView = () => (<Container sx={{ padding: '1rem 0' }}>
    <Stack justifyContent='space-between' alignItems='center'>
      <Box>
        <Image
          alt="Logo"
          src={assets.img.logo}
          height={120}
          width={150}
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
  </Container>);

  return (
    <nav className={`bg-white shadow-xl duration-1000 ${sticky ? 'top-0 fixed right-0 left-0 z-40' : '-top-20'}`}>
      <section className="hidden lg:block">
        <FullScreenView />
      </section>
      <section className="lg:hidden">
        <NavDrawer navContent={navContent} />
      </section>
    </nav>
  );
}

export default MainNav;