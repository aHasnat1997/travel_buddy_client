'use client';

import assets from '@/assets';
import { useAppDispatch } from '@/redux/hooks';
import { storeUserInfo } from '@/redux/slices/authSlice';
import { LoginUser } from '@/services/login/Login.action';
import { Box, Button, Stack, TextField } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  async function formSubmit(values: any) {
    // console.log(values);
    try {
      const userData = await LoginUser(values);
      if (userData.success && userData.data.accessToken) {
        dispatch(storeUserInfo(userData.data.accessToken));
        toast.success(userData.message);
        router.push('/');
      }
      if (!userData.success) {
        toast.error(userData.message);
      }
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <Box sx={{ height: '100vh', width: '100%' }}>
      <Stack justifyContent={'space-between'}>
        <Box sx={{ width: '100%' }}>
          <Image
            alt='Login image'
            src={assets.img.loginImg}
            height={1500}
            width={1500}
            className='w-full h-screen'
          />
        </Box>
        <Box sx={{ width: '100%', height: '100vh' }}>
          <Stack alignItems='center' justifyContent='center' sx={{ width: '100%', height: '100vh' }}>
            <form
              onSubmit={handleSubmit(formSubmit)}
              className='w-1/2 p-6 shadow-[0_0_1.5rem_rgba(0,0,0,0.1)]'
            >
              <h1 className='text-2xl font-semibold text-center'>Login to your account</h1>
              <Stack direction='column' gap='1.5rem' className='mt-14 mb-4'>
                <TextField label='Email' required={true} {...register('email')} />
                <TextField label='Password' required={true} type='password' {...register('password')} />
                <h4 className='text-right text-gray-400'>
                  <Link href='/login'>Forgot Password?</Link>
                </h4>
              </Stack>
              <Button className='w-full' type='submit'>Login</Button>
              <h4 className='mt-4 text-center'>Don&apos;t have an account?
                <Link href='/register' className='text-primary'> Click for Register</Link></h4>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default LoginPage;