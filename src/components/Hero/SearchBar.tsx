import { Box, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Box
      width='100%'
      borderRadius='.5rem'
      overflow='hidden'
    >
      <form>
        <Stack justifyContent='space-between' alignItems='center'>
          <Stack width='100%' gap='1rem' px='1.5rem' py='2.5rem' bgcolor='#fff9f2'>
            <TextField label='Search Trips' />
            <TextField label='Destination' />
            <TextField label='Duration' />
          </Stack>
          <Box
            bgcolor='secondary.main'
            py='3.2rem'
            px='2rem'
          >
            <SearchIcon />
          </Box>
        </Stack>
      </form>
    </Box>
  );
};