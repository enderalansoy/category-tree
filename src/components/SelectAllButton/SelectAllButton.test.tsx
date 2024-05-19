import { render, screen, fireEvent } from '@testing-library/react';
import SelectAllButton from './SelectAllButton';

const categories = [
  { id: '1', name: 'Category 1', parent: '0' },
  { id: '2', name: 'Category 2', parent: '0' },
  { id: '3', name: 'Category 3', parent: '1' },
];

describe('SelectAllButton component', () => {
  it('renders correctly with label', () => {
    render(<SelectAllButton categories={categories} setSelectedCategories={() => {}} />);
    expect(screen.getByText(/select all/i)).toBeInTheDocument();
  });

  it('selects all categories when clicked', () => {
    const setSelectedCategories = vi.fn();
    render(<SelectAllButton categories={categories} setSelectedCategories={setSelectedCategories} />);
    fireEvent.click(screen.getByText(/select all/i));
    expect(setSelectedCategories).toHaveBeenCalledTimes(1);
    expect(setSelectedCategories).toHaveBeenCalledWith(new Map([
      ['1', 'Category 1'],
      ['2', 'Category 2'],
      ['3', 'Category 3']
    ]));
  });
});
