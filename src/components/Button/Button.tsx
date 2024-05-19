import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  label: string;
  variant?: 'primary' | 'text';
  ariaLabel?: string;
}

/**
 * A reusable button component with optional variants.
 * 
 * @param {object} props - The properties object.
 * @param {() => void} props.onClick - The function to call when the button is clicked.
 * @param {string} props.label - The label to display on the button.
 * @param {'primary' | 'text'} [props.variant='primary'] - The variant of the button.
 * @param {string} [props.ariaLabel] - The ARIA label for accessibility.
 * 
 * @returns {JSX.Element} The rendered button component.
 */
const Button: React.FC<ButtonProps> = ({ onClick, label, variant = 'primary', ariaLabel }) => {
  const buttonClass = variant === 'text' ? `${styles.button} ${styles['button--text']}` : styles.button;
  return (
    <button onClick={onClick} className={buttonClass} aria-label={ariaLabel}>
      {label}
    </button>
  );
};

export default Button;
