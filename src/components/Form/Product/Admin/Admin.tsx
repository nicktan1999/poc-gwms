import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Form, { Field } from '../../../components/form/formLayout';

function Admin() {
    const lookupFunction = () => {
        alert('Lookup triggered! Implement your lookup logic here.');
    };

    const firstFormFields: Field[] = [
        { label: 'Related Registration', type: 'text', lookup: lookupFunction },
        { label: 'Registration Window', type: 'text' },
        { label: 'Replaced By Product', type: 'text' },
    ];

    const secondFormFields: Field[] = [
        { label: 'Unit Build Date', type: 'date' },
        { label: 'Replaces Product', type: 'text' },
        { label: 'Replacement Date', type: 'date' },
    ];

    const [firstFormValues, setFirstFormValues] = useState<Record<string, string>>({
        'Related Registration': '',
        'Registration Window': '',
        'Replaced By Product': '',
    });

    const [secondFormValues, setSecondFormValues] = useState<Record<string, string>>({
        'Unit Build Date': '',
        'Replaces Product': '',
        'Replacement Date': '',
    });

    const handleFirstFormChange = (label: string, value: string) => {
        setFirstFormValues((prevValues) => ({
            ...prevValues,
            [label]: value,
        }));
    };

    const handleSecondFormChange = (label: string, value: string) => {
        setSecondFormValues((prevValues) => ({
            ...prevValues,
            [label]: value,
        }));
    };

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
            <Paper sx={{ padding: 2, marginBottom: 2 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box sx={{ flex: 1 }}>
                        <Form
                            fields={firstFormFields}
                            values={firstFormValues}
                            onChange={handleFirstFormChange}
                        />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Form
                            fields={secondFormFields}
                            values={secondFormValues}
                            onChange={handleSecondFormChange}
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}

export default Admin;
