import { Box, Button, Input, Stack } from "@mui/material";
import DoctorTable from "./components/DoctorTable";
import FullScreenDialog from "@/components/Ui/FullScreenDialog";

export default function DoctorPage() {
  return (
    <Box>
      <Stack justifyContent='space-between'>
        <FullScreenDialog buttonTitle="ADD New Doctor" />
        <Input placeholder="Search for doctor" />
      </Stack>
      <Box marginTop='1.5rem'>
        <DoctorTable />
      </Box>
    </Box>
  );
};