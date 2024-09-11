import * as React from 'react';
import Form, { Field } from '../../../../components/form/formLayout';
import styles from '../../../Toolbar.module.css';

const lookupFunction = () => {
  alert('Lookup triggered! Implement your lookup logic here.');
};

const fields: Field[] = [
  { label: 'Name', type: 'text', required: true },
  { label: 'Display Name', type: 'text' },
  { label: 'Related Market Rule', type: 'text', lookup: lookupFunction },
  { label: 'Related Business Unit', type: 'text', lookup: lookupFunction },
  { label: 'Serial Number', type: 'text', required: true },
  { label: 'SKU Number', type: 'text' },
  { label: 'SKU ID', type: 'text', lookup: lookupFunction },
  { label: 'Ship Date', type: 'date' },
  { label: 'Registration Date', type: 'date' },
  { label: 'Warranty Type', type: 'select', options: ['--Select--', 'Renewable', 'Non-'] },
  { label: 'Order Number', type: 'text' },
  { label: 'Date of Sale', type: 'text' },
  { label: 'Invoice Number', type: 'text' },
  { label: 'Parent Product', type: 'text', lookup: lookupFunction },
  { label: 'Return Date', type: 'text' },
  { label: 'Ordering ABO Number', type: 'text' },
  { label: 'Distributer ABO Number', type: 'text' },
  { label: 'Remark', type: 'text' },
];

interface IntegrationInputsProps {
  row: Record<string, string>;
  isNew: boolean;
}

const IntegrationInputs: React.FC<IntegrationInputsProps> = ({ row, isNew }) => {
  const [values, setValues] = React.useState<Record<string, string>>(
    fields.reduce((acc, field) => {
      acc[field.label] = isNew ? 
        (field.label === 'Warranty Type' ? 'Renewable' : '') :
        row[field.label] || '';
      return acc;
    }, {} as Record<string, string>)
  );

  const handleChange = (label: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [label]: value,
    }));
  };

  return (
    <div className={styles['form-container']}>
      <Form fields={fields} headers="Integration Inputs" values={values} onChange={handleChange} />
    </div>
  );
};

export default IntegrationInputs;
