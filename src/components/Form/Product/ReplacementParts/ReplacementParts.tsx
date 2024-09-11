import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const rows = [
    {
        id: 1,
        name: 'Test Sky Durable',
        productId: 'PROD123',
        sku: 'SKU123',
        partSerialNumber: 'RETURNSKALOGTEST123',
        orderNumber: 'ORD123',
        shipDate: new Date('2024-09-01'),
        relatedBusinessUnit: 'UnitA',
        invoiceNumber: 'INV123',
        orderLineNumber: 'OLN123',
        orderDate: new Date('2024-08-30'),
        originalSerialNumber: 'OSN123',
        createdOn: new Date('2024-09-03'),
    },
    {
        id: 2,
        name: 'Another Product',
        productId: 'PROD456',
        sku: 'SKU456',
        partSerialNumber: 'RETURNSKALOGTEST456',
        orderNumber: 'ORD456',
        shipDate: new Date('2024-09-02'),
        relatedBusinessUnit: 'UnitB',
        invoiceNumber: 'INV456',
        orderLineNumber: 'OLN456',
        orderDate: new Date('2024-08-31'),
        originalSerialNumber: 'OSN456',
        createdOn: new Date('2024-09-04'),
    },
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: theme.shape.borderRadius,
    boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.2), 0px 8px 16px rgba(0, 0, 0, 0.1)`,
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const paginationModel = { page: 0, pageSize: 5 };

interface ReplacementPartsListProps {
    isNew: boolean;
}

const ReplacementPartsList: React.FC<ReplacementPartsListProps> = ({ isNew }) => {
    const navigate = useNavigate();

    function handleRowClick(row: any) {
        navigate(`/form/${row.id}`, { state: { row } });
    }

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'productId', headerName: 'Product ID', width: 150 },
        { field: 'sku', headerName: 'SKU', width: 150 },
        { field: 'partSerialNumber', headerName: 'Part Serial Number', width: 200 },
        { field: 'orderNumber', headerName: 'Order Number', width: 150 },
        { field: 'shipDate', headerName: 'Ship Date', type: 'date', width: 150 },
        { field: 'relatedBusinessUnit', headerName: 'Related Business Unit', width: 200 },
        { field: 'invoiceNumber', headerName: 'Invoice Number', width: 150 },
        { field: 'orderLineNumber', headerName: 'Order Line Number', width: 150 },
        { field: 'orderDate', headerName: 'Order Date', type: 'date', width: 150 },
        { field: 'originalSerialNumber', headerName: 'Original Serial Number', width: 200 },
        { field: 'createdOn', headerName: 'Created On', type: 'date', width: 150 },
    ];

    return (
        <Box
            sx={{
                flexGrow: 1,
                marginLeft: 10,
                marginRight: 2,
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                minHeight: 'auto',
            }}
        >
            <Item sx={{ flexGrow: 1 }}>
                <div style={{ padding: '2px 12px', margin: '10px' }}>
                    {isNew ? (
                        <Paper sx={{ padding: 2, textAlign: 'center' }}>
                            <h6>Cannot add replacement parts in "New" mode.</h6>
                        </Paper>
                    ) : (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                                <Tooltip title={<span>Add New Replacement Part<br />Add a related Replacement Part to this record.</span>} arrow>
                                    <Button
                                        variant="contained"
                                        style={{ marginRight: '8px', background: 'white', color: 'black' }}
                                        startIcon={<AddIcon />}
                                    >
                                        New Replacement Part
                                    </Button>
                                </Tooltip>
                                <Tooltip title={<span>Add Existing Replacement Part<br />Add a Replacement Part that already exists to the record you are working with.</span>} arrow>
                                    <Button
                                        variant="contained"
                                        style={{ background: 'white', color: 'black' }}
                                        startIcon={<PostAddIcon />}
                                    >
                                        Add Existing Replacement Part
                                    </Button>
                                </Tooltip>
                            </div>
                            <Paper sx={{ height: 'auto', width: '100%', overflowX: 'hidden' }} elevation={0}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{ pagination: { paginationModel } }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                    sx={{ border: 0 }}
                                />
                            </Paper>
                        </>
                    )}
                </div>
            </Item>
        </Box>
    );
}

export default ReplacementPartsList;
