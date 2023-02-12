import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'ProjectName',
    headerName: 'Project Name',
    width: 150,
    editable: true,
  },
  {
    field: 'Description',
    headerName: 'Description',
    width: 110,
    editable: true,
  },
  {
    field: 'WalletAddress',
    headerName: 'Owner',
    width: 150,
    editable: true,
  },
  
];

const rows = [
  { id: 1, ProjectName: 'Snow', Description : "Snow White", WalletAddress: '0x329847298743982749237493287498237', },
  
];

export default function gri() {
  return (
    
    <Box sx={{ height: 400, width: '100%', backgroundColor: 'primary.dark','&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      }, }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
            
          },
        }}
        pageSizeOptions={[5]}
        
      />
    </Box>
  );
}