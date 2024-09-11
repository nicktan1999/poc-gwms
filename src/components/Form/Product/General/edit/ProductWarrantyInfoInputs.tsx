import * as React from 'react';
import { styled } from '@mui/system';
import styles from '../../../Toolbar.module.css';

interface ProductWarrantyInfoInputsProps {
  isNew: boolean;
}

const fields = [
  { label: 'Extended Eligible' },
  { label: 'Renewable Eligible' },
];

const ProductWarrantyInfoInputs: React.FC<ProductWarrantyInfoInputsProps> = ({ isNew }) => {
  const [values, setValues] = React.useState(
    fields.reduce((acc, field) => {
      acc[field.label] = 'No';
      return acc;
    }, {} as Record<string, string>)
  );

  const handleChange = (label: string) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [label]: event.target.value,
    }));
  };

  return (
    <div className={styles['form-container']}>
      <h5>Product Warranty Info Inputs</h5>
      <div className={styles['form-control-container']}>
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            <p className={styles['label']}>{field.label}</p>
            <div className={styles['input-wrapper']}>
              <select
                className={styles['styled-select']}
                value={values[field.label]}
                onChange={handleChange(field.label)}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductWarrantyInfoInputs;
