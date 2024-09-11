import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

const rows = [
    {
        id: 1,
        serialNumber: 'RETURNSKALOGTEST123',
        unitSerialNumber: 'TESTINGONETWOTHRE',
        description: 'DUMMYSKYUNIT',
        partNumber: 'DummySkyUnit',
        createdOn: new Date('2024-09-03'),
    },
    {
        id: 2,
        serialNumber: 'RETURNSKALOGTEST123',
        unitSerialNumber: '231231231',
        description: 'DUMMYSKYUNIT',
        partNumber: 'DummySkyUnit',
        createdOn: new Date('2024-09-03'),
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

interface ComponentPartsListProps {
    isNew: boolean;
}

const ComponentPartsList: React.FC<ComponentPartsListProps> = ({ isNew }) => {
    const navigate = useNavigate();

    function handleRowClick(row: any) {
        navigate(`/form/${row.id}`, { state: { row } });
    }

    const columns: GridColDef[] = [
        {
            field: 'serialNumber', headerName: 'Serial Number', width: 350, renderCell: (params) => (
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
        { field: 'unitSerialNumber', headerName: 'Unit Serial Number', width: 350 },
        { field: 'description', headerName: 'Description', width: 350 },
        { field: 'partNumber', headerName: 'Part Number', width: 350 },
        { field: 'createdOn', headerName: 'Created On', type: 'date', width: 130 },
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
                            <h6>Component parts cannot be added in "New" mode.</h6>
                        </Paper>
                    ) : (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                                <Tooltip title={<span>Add New Component Part<br />Add a related Component Part to this record.</span>} arrow>
                                    <Button
                                        variant="contained"
                                        style={{ marginRight: '8px', background: 'white', color: 'black' }}
                                        startIcon={<AddIcon />}
                                    >
                                        New Component Part
                                    </Button>
                                </Tooltip>
                                <Tooltip title={<span>Add Existing Component Part<br />Add a Component Part that already exists to the record you are working with.</span>} arrow>
                                    <Button
                                        variant="contained"
                                        style={{ background: 'white', color: 'black' }}
                                        startIcon={<PostAddIcon />}
                                    >
                                        Add Existing Component Part
                                    </Button>
                                </Tooltip>
                            </div>
                            <Paper sx={{ height: 'auto', width: '100%', overflowX: 'hidden' }} elevation={0}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
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
export default ComponentPartsList;

