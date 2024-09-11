import * as React from 'react';
import { Input } from '@mui/base/Input';
import { styled } from '@mui/system';
import styles from '../../../Toolbar.module.css';

interface ServiceContractsProps {
  isNew: boolean;
}

const ServiceContracts: React.FC<ServiceContractsProps> = ({ isNew }) => {
  return (
    <div className={styles['form-container']}>
      <h5>All Service Contracts</h5>
      {isNew && <p className={styles['new-indicator']}>New Service Contract</p>}
      {/* Uncomment and adjust the following if you have fields to display */}
      {/* 
      <div className={styles['form-control-container']}>
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            <p className={styles['label']}>{field.label}</p>
            <div className={styles['input-wrapper']}>
              <Input
                className={styles['styled-input']}
                placeholder="---"
                value={values[field.label]}
                onChange={handleChange(field.label)}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
      */}
    </div>
  );
};

export default ServiceContracts;
