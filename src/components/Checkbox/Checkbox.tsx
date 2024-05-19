import React from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  id: string;
}

/**
 * A reusable checkbox component.
 * 
 * @param {object} props - The properties object.
 * @param {boolean} props.checked - Indicates whether the checkbox is checked.
 * @param {() => void} props.onChange - The function to call when the checkbox state changes.
 * @param {string} props.label - The label to display alongside the checkbox.
 * @param {string} props.id - The unique identifier for the checkbox.
 * 
 * @returns {JSX.Element} The rendered checkbox component.
 */
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
