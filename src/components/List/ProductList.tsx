/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';


const initialRows = [
  {
    id: 1,
    name: 'Test Sky Durable - RETURNSKALOGTEST123',
    displayName: 'Dummy Sky Unit',
    registrationDate: '',
    registrationDeadline: '',
    serialNumber: 'TESTING123456',
    shipDate: '',
    skuID: 'DUMMYSKYUNIT',
    skuNumber: 'DummySkyUnit',
    customerID: '',
    relatedMarketRule: '',
    relatedBusinessUnit: '',
    createdOn: '',
    SCEndDate: '',
    serviceContractStartDate: '',
    orderingABO: '',
    distributorABO: ''
  },
  {
    id: 2,
    name: 'Test Sky Durable - RETURNSKALOGTEST123',
    displayName: 'Dummy Sky Unit',
    registrationDate: '',
    registrationDeadline: '',
    serialNumber: 'RETURNSKALOGTEST123',
    shipDate: '',
    skuID: 'DUMMYSKYUNIT',
    skuNumber: 'DummySkyUnit',
    customerID: '',
    relatedMarketRule: '',
    relatedBusinessUnit: '',
    createdOn: '',
    SCEndDate: '',
    serviceContractStartDate: '',
    orderingABO: '',
    distributorABO: ''
  },
  {
    id: 3,
    name: 'Test Sky Durable - RETURNSKALOGTEST123',
    displayName: 'Dummy Sky Unit',
    registrationDate: '',
    registrationDeadline: '',
    serialNumber: 'RETURNSKALOGTEST123',
    shipDate: '',
    skuID: 'DUMMYSKYUNIT',
    skuNumber: 'DummySkyUnit',
    customerID: '',
    relatedMarketRule: '',
    relatedBusinessUnit: '',
    createdOn: '',
    SCEndDate: '',
    serviceContractStartDate: '',
    orderingABO: '',
    distributorABO: ''
  },
  {
    id: 4,
    name: 'Test Sky Durable - RETURNSKALOGTEST123',
    displayName: 'Dummy Sky Unit',
    registrationDate: '',
    registrationDeadline: '',
    serialNumber: 'RETURNSKALOGTEST123',
    shipDate: '',
    skuID: 'DUMMYSKYUNIT',
    skuNumber: 'DummySkyUnit',
    customerID: '',
    relatedMarketRule: '',
    relatedBusinessUnit: '',
    createdOn: '',
    SCEndDate: '',
    serviceContractStartDate: '',
    orderingABO: '',
    distributorABO: ''
  },
  {
    id: 5,
    name: 'Test Sky Durable - RETURNSKALOGTEST123',
    displayName: 'Dummy Sky Unit',
    registrationDate: '',
    registrationDeadline: '',
    serialNumber: 'RETURNSKALOGTEST123',
    shipDate: '',
    skuID: 'DUMMYSKYUNIT',
    skuNumber: 'DummySkyUnit',
    customerID: '',
    relatedMarketRule: '',
    relatedBusinessUnit: '',
    createdOn: '',
    SCEndDate: '',
    serviceContractStartDate: '',
    orderingABO: '',
    distributorABO: ''
  },

];

const paginationModel = { page: 0, pageSize: 5 };

function ProductList() {
  const [filterText, setFilterText] = useState('');
  const [filteredRows, setFilteredRows] = useState(initialRows);
  const navigate = useNavigate();

  const handleRowClick = (row: any) => {
    navigate(`/form/${row.id}`, { state: { row } });
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };


  const handleSearch = () => {
    const value = filterText.toLowerCase();
    const newFilteredRows = initialRows.filter((row) =>
      row.serialNumber.toLowerCase().includes(value) ||
      row.skuNumber.toLowerCase().includes(value)
    );
    setFilteredRows(newFilteredRows);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


  const columns: GridColDef[] = [
    {
      field: 'name', headerName: 'Name', width: 280, renderCell: (params) => (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleRowClick(params.row);
          }}
        >
          {params.value}
        </a>
      )
    },
    { field: 'displayName', headerName: 'Display Name', width: 280 },
    { field: 'registrationDate', headerName: 'Registration Date', type: 'date', width: 200 },
    { field: 'registrationDeadline', headerName: 'Registration Deadline', type: 'date', width: 200 },
    { field: 'serialNumber', headerName: 'Serial Number', width: 200 },
    { field: 'shipDate', headerName: 'Ship Date', type: 'date', width: 130 },
    { field: 'skuID', headerName: 'SKU ID', width: 130 },
    { field: 'skuNumber', headerName: 'SKU Number', width: 130 },
    { field: 'customerID', headerName: 'Customer ID (Related Registration)', width: 130 },
    { field: 'relatedMarketRule', headerName: 'Related Market Rule', width: 130 },
    { field: 'relatedBusinessUnit', headerName: 'Related Business Unit', width: 130 },
    { field: 'createdOn', headerName: 'Created On', type: 'dateTime', width: 130 },
    { field: 'SCEndDate', headerName: 'SC End Date', width: 130 },
    { field: 'serviceContractStartDate', headerName: 'Service Contract Start Date', width: 130 },
    { field: 'orderingABO', headerName: 'Ordering ABO Number', width: 130 },
    { field: 'distributorABO', headerName: 'Distributor ABO Number', width: 130 },
  ];

  return (
    <Paper sx={{ height: 'auto', width: '100%', overflowX: 'hidden' }} elevation={0}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: 2 }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          sx={{ width: 300 }}
          value={filterText}
          onChange={handleFilterChange}
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default ProductList;

