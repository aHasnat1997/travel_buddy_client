import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Box
      width='100%'
    >
      <form>
        <Stack direction='column' alignItems='center'>
          <Stack
            direction='column'
            px='1.5rem'
            pt='1.5rem'
            pb='2rem'
            bgcolor='#fff9f2'
            borderRadius='.5rem'
          >
            <Typography
              variant="h4"
              fontWeight='bold'
              color='secondary.main'
              sx={{ fontSize: { xs: '1rem', sm: '2rem' } }}
            >
              Find your trip
            </Typography>
            <Stack width='100%' gap='1rem' mt='1rem'>
              <TextField label='Search Trips' sx={{ fontSize: { xs: '.5rem', sm: '2rem' } }} />
              <TextField label='Destination' sx={{ fontSize: { xs: '.5rem', sm: '2rem' } }} />
              <TextField label='Duration' sx={{ fontSize: { xs: '.5rem', sm: '2rem' } }} />
            </Stack>
          </Stack>
          <Box mt='-1rem'>
            <Button startIcon={<SearchIcon />}>
              Search
            </Button>
          </Box>
        </Stack>
      </form>
    </Box>
  );
};