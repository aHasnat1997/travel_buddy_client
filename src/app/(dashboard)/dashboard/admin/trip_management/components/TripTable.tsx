import DataTable from "@/components/Ui/DataTable";
import { FindAllTrips } from "@/services/trips/trips.action";
import { GridColDef } from "@mui/x-data-grid";

export default async function TripTable() {
  const tripsData = await FindAllTrips();
  // console.log('===================>', tripsData.data[0]);

  const tableColumns: GridColDef<Record<string, any>>[] = [
    {
      field: 'destination',
      headerName: 'Destination',
      flex: 1
    },
    {
      field: 'startingPoint',
      headerName: 'Starting Point',
      flex: 1
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      flex: 1,
      // valueFormatter: (value) => console.log(value),
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      flex: 1
    },
    {
      field: 'budget',
      headerName: 'Budget',
      flex: 1
    },
    {
      field: 'capacity',
      headerName: 'Capacity',
      flex: 1
    },
    // {
    //   field: 'creator.user.name',
    //   headerName: 'Creator',
    //   flex: 1
    // }
  ];

  return (
    <div>
      <DataTable rows={tripsData.data} columns={tableColumns} />
    </div>
  );
}
