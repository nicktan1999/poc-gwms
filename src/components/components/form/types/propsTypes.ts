type FieldType = 'text' | 'date' | 'select';

export type Field = {
  label: string;
  type?: FieldType;
  options?: string[];
  required?: boolean;
};

type FormProps = {
  fields: Field[];
  values: Record<string, string>;
  onChange: (label: string, value: string) => void;
  headers: string;
};