import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  label: string;
  variant?: 'primary' | 'text';
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, variant = 'primary', ariaLabel }) => {
  const buttonClass = variant === 'text' ? `${styles.button} ${styles['button--text']}` : styles.button;
  return (
    <button onClick={onClick} className={buttonClass} aria-label={ariaLabel}>
      {label}
    </button>
  );
};

export default Button;
