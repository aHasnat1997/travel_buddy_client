'use clint';

import { Box, Stack, TextField } from "@mui/material";
import TripTable from "./components/TripTable";
import FullScreenDialog from "@/components/Ui/FullScreenDialog";

export default function TripManagementPage() {
  return (
    <Box>
      <Stack justifyContent='space-between'>
        <TextField
          label='Search for Trip'
          fullWidth={false}
          variant='standard'
          sx={{ width: '25%' }}
        />
        <FullScreenDialog buttonTitle="Filter Trip" />
      </Stack>
      <Box marginTop='1.5rem'>
        <TripTable />
      </Box>
    </Box>
  );
};