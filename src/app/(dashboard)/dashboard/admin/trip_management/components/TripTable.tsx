'use client';

import DataTable from "@/components/Ui/DataTable";
import { useAllTripQuery } from "@/redux/api/endpoints/tripApi";
import { GridColDef } from "@mui/x-data-grid";

export default function TripTable() {
  const { data: tripsData, isLoading } = useAllTripQuery(undefined);

  const dateFormate = (value: string) => {
    const dateString = value;
    // Parse the date string into a Date object
    const date = new Date(dateString);

    // Define options for toLocaleDateString
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    };

    // Format the date
    const formattedDate = date.toLocaleDateString('en-US', options).replace(',', '');
    return (formattedDate);
  }


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
