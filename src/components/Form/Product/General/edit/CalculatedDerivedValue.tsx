import * as React from 'react';
import { FormControl } from '@mui/base/FormControl';
import { Input, inputClasses } from '@mui/base/Input';
import { styled } from '@mui/system';
import clsx from 'clsx';
import styles from '../../../Toolbar.module.css';

const fields = [
  { label: 'Service Contract Start Date'},
  { label: 'Last updated'},
  { label: 'Service Contract End Date'},
  { label: 'Last updated'},
  { label: 'Registration Deadline'},
  { label: 'Customer Eligible'},
  { label: 'Case Number'}
];

interface CalculatedDerivedValuesProps {
  isNew: boolean;
}

const CalculatedDerivedValues: React.FC<CalculatedDerivedValuesProps> = ({ isNew }) => {
  const [values, setValues] = React.useState(
    fields.reduce((acc, field) => {
      acc[field.label] = '';
      return acc;
    }, {} as Record<string, string>)
  );

  const handleChange = (label: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [label]: event.target.value,
    }));
  };

  const handleSelectChange = (label: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [label]: event.target.value,
    }));
  };

  return (
    <div className={styles['form-container']}>
      <h5>Calculated / Derived Values</h5>
      <div className={styles['form-control-container']}>
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            <p className={styles['label']}>{field.label}</p>
            <div className={styles['input-wrapper']}>
              {field.label === 'Customer Eligible' ? (
                <select
                  className={styles['styled-select']}
                  value={values[field.label]}
                  onChange={handleSelectChange(field.label)}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              ) : (
                <Input
                  className={styles['styled-input']}
                  placeholder="---"
                  value={values[field.label]}
                  onChange={handleChange(field.label)}
                />
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CalculatedDerivedValues;
