'use client';

import assets from "@/assets";
import { Box, Button, Stack, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const router = useRouter();

  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      <Stack justifyContent={'space-between'}>
        <Box sx={{ width: '100%', height: '100vh' }}>
          <Stack alignItems='center' justifyContent='center' sx={{ width: '100%', height: '100vh' }}>
            <div className="w-1/2 p-6 shadow-[0_0_1.5rem_rgba(0,0,0,0.1)]">
              <h1 className="text-2xl font-semibold text-center">Register as Patient</h1>
              <Stack direction='column' gap='1.5rem' className="mt-14 mb-4">
                <TextField label="Email" />
                <TextField label="Password" type="password" />
                <TextField label="Contact Number" type="tel" />
                <TextField label="Address" />
                <TextField label="Date Of Birth" />
              </Stack>
              <Button className='w-full' onClick={() => router.push('/')}>Register</Button>
              <h4 className="mt-4 text-center">Already have an account?
                <Link href='/login' className="text-primary"> Click for Login</Link></h4>
            </div>
          </Stack>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Image
            alt="Register image"
            src={assets.img.registerImg}
            height={1500}
            width={1500}
            className="w-full h-screen"
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default RegisterPage;