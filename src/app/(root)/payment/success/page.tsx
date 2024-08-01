'use client';

import assets from "@/assets";
import { Box, Button, Container, Typography } from "@mui/material";
import Lottie from "lottie-react";
import Link from "next/link";

function PaymentSuccessPage() {
  return (
    <Box sx={{
      background: 'linear-gradient(to top, #1ec28b17, #b1f3dd)',
      width: '100%',
    }}>

      <Container>
        <Box width='100%' height='90vh' sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Typography variant="h4">Payment Successful</Typography>
          <Lottie
            animationData={assets.animations.success}
            className="w-44"
            loop={true}
          />
          <Link href='/'>
            <Button>Back to Home</Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default PaymentSuccessPage;