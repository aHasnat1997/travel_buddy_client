"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type TDataTable = {
  rows: Record<string, any>[];
  columns: GridColDef<(Record<string, any>[])[number]>[]
}

export default function DataTable({ rows, columns }: TDataTable) {
  // console.log({ rows, columns });


  return (
    <Box sx={{ width: '100%', height: '80vh' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}