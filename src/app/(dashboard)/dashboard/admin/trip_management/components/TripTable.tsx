'use client';

import DataTable from "@/components/Ui/DataTable";
import { useAllTripQuery } from "@/redux/api/endpoints/tripApi";
import { dateFormate } from "@/utils/dateFormate";
import { GridColDef } from "@mui/x-data-grid";

export default function TripTable() {
  const { data: tripsData, isLoading } = useAllTripQuery(undefined);


  const tableColumns: GridColDef<Record<string, any>>[] = [
    {
      field: 'tripTitle',
      headerName: 'Trip Title',
      flex: 1
    },
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
      valueFormatter: (value) => dateFormate(value),
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      flex: 1,
      valueFormatter: (value) => dateFormate(value),
    },
    {
      field: 'budget',
      headerName: 'Budget',
      flex: 1
    },
    {
      field: 'totalSlots',
      headerName: 'Total Slots',
      flex: 1
    },
    {
      field: 'totalBooked',
      headerName: 'Total Booked',
      flex: 1
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <DataTable rows={tripsData.data!} columns={tableColumns} />
    </div>
  );
}
