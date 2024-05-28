'use client';

import ErrorAnimations from '@/components/LottieAnimations/ErrorAnimations';
import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <section className='w-full h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center gap-4'>
        <ErrorAnimations />
        <h2 className='text-2xl font-semibold'>{error.message}</h2>
        <Stack gap={2}>
          <Button
            onClick={() => router.push('/')}
          >
            Back to Home
          </Button>
          <Button
            onClick={() => reset()}
            variant='contained'
          >
            Try again
          </Button>
        </Stack>
      </div>
    </section>
  )
}