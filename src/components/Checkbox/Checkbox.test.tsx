import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox component', () => {
  it('renders correctly with label', () => {
    render(<Checkbox checked={false} onChange={() => {}} label="Test Checkbox" id="test-checkbox" />);
    expect(screen.getByLabelText(/test checkbox/i)).toBeInTheDocument();
  });

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn();
    render(<Checkbox checked={false} onChange={handleChange} label="Test Checkbox" id="test-checkbox" />);
    fireEvent.click(screen.getByLabelText(/test checkbox/i));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('is checked when the checked prop is true', () => {
    render(<Checkbox checked={true} onChange={() => {}} label="Test Checkbox" id="test-checkbox" />);
    expect(screen.getByLabelText(/test checkbox/i)).toBeChecked();
  });

  it('is not checked when the checked prop is false', () => {
    render(<Checkbox checked={false} onChange={() => {}} label="Test Checkbox" id="test-checkbox" />);
    expect(screen.getByLabelText(/test checkbox/i)).not.toBeChecked();
  });
});
