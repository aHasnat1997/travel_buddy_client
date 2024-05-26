'use client';

import assets from "@/assets";
import { useUserLoginMutation, useUserRegisterMutation } from "@/redux/api/endpoints/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { storeUserInfo } from "@/redux/slices/authSlice";
import { Box, Button, Stack, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function RegisterPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [userRegister] = useUserRegisterMutation();
  const [userLogin] = useUserLoginMutation();
  const dispatch = useAppDispatch();

  async function formSubmit(values: any) {
    const data = {
      ...values,
      profile: {
        bio: '',
        age: 0,
        address: ''
      }
    };
    console.log(data);
    const loginUserData = {
      email: values.email,
      password: values.password
    };

    try {
      const { data: userData } = await userRegister(data);
      console.log(userData);
      if (userData.success) {
        const { data: loginData } = await userLogin(loginUserData);
        console.log(loginData);
        dispatch(storeUserInfo(loginData.data));
        toast.success(userData.message);
        router.push('/dashboard');
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
        <Box sx={{ width: '100%', height: '100vh' }}>
          <Stack alignItems='center' justifyContent='center' sx={{ width: '100%', height: '100vh' }}>
            <form
              onSubmit={handleSubmit(formSubmit)}
              className='w-1/2 p-6 shadow-[0_0_1.5rem_rgba(0,0,0,0.1)]'
            >
              <h1 className="text-2xl font-semibold text-center">User Register</h1>
              <Stack direction='column' gap='1.5rem' className='mt-14 mb-4'>
                <TextField label='Name' required={true} {...register('name')} />
                <TextField label='Email' required={true} {...register('email')} />
                <TextField label='Password' required={true} type='password' {...register('password')} />
              </Stack>
              <Button className='w-full' type='submit'>Register</Button>
              <h4 className="mt-4 text-center">Already have an account?
                <Link href='/login' className="text-primary"> Click for Login</Link></h4>
            </form>
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