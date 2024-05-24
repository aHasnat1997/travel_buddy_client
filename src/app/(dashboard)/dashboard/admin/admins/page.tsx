import FullScreenDialog from "@/components/Ui/FullScreenDialog";
import { Box, Input, Stack } from "@mui/material";
import AdminTable from "./components/AdminTable";

export default function AdminsPage() {
  return (
    <Box>
      <Stack justifyContent='space-between'>
        <FullScreenDialog buttonTitle="ADD New Admin" />
        <Input placeholder="Search for Admin" />
      </Stack>
      <Box marginTop='1.5rem'>
        <AdminTable />
      </Box>
    </Box>
  );
};