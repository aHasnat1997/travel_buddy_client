'use client';

import DataTable from "@/components/Ui/DataTable";
import { useAllTripQuery } from "@/redux/api/endpoints/tripApi";
import { GridColDef } from "@mui/x-data-grid";

export default function TripTable() {
  // const tripsData = await FindAllTrips();
  const { data: tripsData, isLoading } = useAllTripQuery(undefined);
  console.log('===================>', tripsData, isLoading);
  // const tripsData = {
  //   "success": true,
  //   "statusCode": 200,
  //   "message": "Trips retrieved successfully",
  //   "mete": {
  //     "page": 1,
  //     "limit": 10,
  //     "total": 2
  //   },
  //   "data": [
  //     {
  //       "id": "785e7569-beb7-4bd7-a2fc-fc9a2902e9ab",
  //       "userId": "01a843c7-8689-4439-9e68-40c8b3bfa0e2",
  //       "tripDetails": "A summer vacation to explore the mountains and beaches.",
  //       "startingPoint": "Paris",
  //       "destination": "Los Angeles",
  //       "startDate": "2024-06-01T00:00:00.000Z",
  //       "endDate": "2024-06-15T00:00:00.000Z",
  //       "budget": 2500,
  //       "activities": [
  //         "hiking",
  //         "swimming",
  //         "sightseeing"
  //       ],
  //       "capacity": 6,
  //       "createdAt": "2024-05-22T21:01:45.986Z",
  //       "updatedAt": "2024-05-22T21:01:45.986Z",
  //       "creator": {
  //         "id": "01a843c7-8689-4439-9e68-40c8b3bfa0e2",
  //         "userId": "6366e4b0-4750-4f4c-8ae3-122817b3c18b",
  //         "profileImage": null,
  //         "bio": "Passionate about helping people find their lost items.",
  //         "age": 25,
  //         "address": "626 Hilll Throughway",
  //         "createdAt": "2024-05-22T19:50:02.895Z",
  //         "updatedAt": "2024-05-22T19:50:02.895Z",
  //         "user": {
  //           "id": "6366e4b0-4750-4f4c-8ae3-122817b3c18b",
  //           "name": "Angie Mertz",
  //           "email": "Millie15@gmail.com",
  //           "password": "$2b$14$YVf0MjapYbDKYCvi3j1x5uJx9KLc7CpTGgFzjjV05Z2n8kymYKCvy",
  //           "role": "ADMIN",
  //           "createdAt": "2024-05-22T19:50:02.895Z",
  //           "updatedAt": "2024-05-22T19:50:02.895Z"
  //         }
  //       }
  //     },
  //     {
  //       "id": "92c97dc8-d0cf-4681-b2ac-c38c85ba5d73",
  //       "userId": "01a843c7-8689-4439-9e68-40c8b3bfa0e2",
  //       "tripDetails": "A summer vacation to explore the mountains and beaches.",
  //       "startingPoint": "New York",
  //       "destination": "Los Angeles",
  //       "startDate": "2024-06-01T00:00:00.000Z",
  //       "endDate": "2024-06-15T00:00:00.000Z",
  //       "budget": 2000,
  //       "activities": [
  //         "hiking",
  //         "swimming",
  //         "sightseeing"
  //       ],
  //       "capacity": 4,
  //       "createdAt": "2024-05-22T21:00:51.989Z",
  //       "updatedAt": "2024-05-22T21:00:51.989Z",
  //       "creator": {
  //         "id": "01a843c7-8689-4439-9e68-40c8b3bfa0e2",
  //         "userId": "6366e4b0-4750-4f4c-8ae3-122817b3c18b",
  //         "profileImage": null,
  //         "bio": "Passionate about helping people find their lost items.",
  //         "age": 25,
  //         "address": "626 Hilll Throughway",
  //         "createdAt": "2024-05-22T19:50:02.895Z",
  //         "updatedAt": "2024-05-22T19:50:02.895Z",
  //         "user": {
  //           "id": "6366e4b0-4750-4f4c-8ae3-122817b3c18b",
  //           "name": "Angie Mertz",
  //           "email": "Millie15@gmail.com",
  //           "password": "$2b$14$YVf0MjapYbDKYCvi3j1x5uJx9KLc7CpTGgFzjjV05Z2n8kymYKCvy",
  //           "role": "ADMIN",
  //           "createdAt": "2024-05-22T19:50:02.895Z",
  //           "updatedAt": "2024-05-22T19:50:02.895Z"
  //         }
  //       }
  //     }
  //   ]
  // };

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

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <DataTable rows={tripsData.data!} columns={tableColumns} />
    </div>
  );
}
