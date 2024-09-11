import * as React from 'react';
import styles from './formLayout.module.css';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type FieldType = 'text' | 'date' | 'select';

export type Field = {
  label: string;
  type?: FieldType;
  options?: string[];
  required?: boolean;
  lookup?: () => void;
};

type FormProps = {
  fields: Field[];
  values: Record<string, string>;
  onChange: (label: string, value: string) => void;
  headers?: string;
};

const Form: React.FC<FormProps> = ({ fields, values, onChange, headers }) => {
  const handleChange = (label: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(label, event.target.value);
  };

  const handleLookup = (lookupFn?: () => void) => () => {
    if (lookupFn) lookupFn();
  };

  return (
    <div className={styles['form-container']}>
      {headers && <h5>{headers}</h5>}
      <div className={styles['form-control-container']}>
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            <p className={styles['label']}>{field.label}</p>
            <div className={styles['input-wrapper']}>
              {field.type === 'date' ? (
                <input
                  type="date"
                  className={styles['styled-date']}
                  value={values[field.label] || ''}
                  onChange={handleChange(field.label)}
                />
              ) : field.type === 'select' ? (
                <select
                  className={styles['styled-select']}
                  value={values[field.label] || ''}
                  onChange={handleChange(field.label)}
                >
                  {field.options?.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <div className={styles['text-input-wrapper']}>
                  <input
                    type="text"
                    className={styles['styled-input']}
                    value={values[field.label] || ''}
                    onChange={handleChange(field.label)}
                  />
                  {field.lookup && (
                    <IconButton
                      className={styles['lookup-icon']}
                      onClick={handleLookup(field.lookup)}
                    >
                      <SearchIcon />
                    </IconButton>
                  )}
                </div>
              )}
              {field.required && <span className={styles['required-asterisk']}>*</span>}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Form;
