import React from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  id: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label, id }) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={styles.checkbox__input}
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
      />
      <label id={`${id}-label`} htmlFor={id} className={styles.checkbox__label}>{label}</label>
    </div>
  );
};

export default Checkbox;
