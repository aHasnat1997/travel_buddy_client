import { Box, Button, Stack, TextField, Typography } from "@mui/material";

function AddTripPage() {
  return (
    <Box>
      <Typography color='text.primary' fontWeight='bold' variant='h4'>
        Add New Trip
      </Typography>
      <form>
        <Stack direction='column' gap='1.5rem' py='1.5rem'>
          <Stack gap='2.5rem'>
            <TextField label='Destination' />
            <TextField label='Starting Point' />
          </Stack>
          <Stack gap='2.5rem'>
            <TextField label='Start Date' />
            <TextField label='End Date' />
          </Stack>
          <Stack gap='2.5rem'>
            <TextField label='Budget' />
            <TextField label='Capacity' />
            <TextField label='Activities' />
          </Stack>
          <TextField label='Trip Details' />
        </Stack>
        <Button>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default AddTripPage;