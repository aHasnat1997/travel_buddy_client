import { Box, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Box
      width='100%'
      borderRadius='.5rem'
      overflow='hidden'
      bgcolor='#fff9f2'
    >
      <form>
        <Stack justifyContent='space-between' alignItems='center' color='secondary.main'>
          <Stack direction='column' px='1.5rem' py='1.5rem'>
            <Typography variant="h4" fontWeight='bold'>Find your trip</Typography>
            <Stack width='100%' gap='1rem' mt='1rem'>
              <TextField label='Search Trips' />
              <TextField label='Destination' />
              <TextField label='Duration' />
            </Stack>
          </Stack>
          <Box
            bgcolor='secondary.main'
            sx={{ cursor: 'pointer' }}
          >
            <SearchIcon className="mx-8 my-14 text-white size-12" />
          </Box>
        </Stack>
      </form>
    </Box>
  );
};