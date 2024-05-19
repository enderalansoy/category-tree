import { render, screen } from '@testing-library/react';
import SelectedCategories from './SelectedCategories';

describe('SelectedCategories component', () => {
  it('renders correctly with selected categories', () => {
    const selectedCategories = new Map([['1', 'Category 1'], ['2', 'Category 2']]);
    render(<SelectedCategories selectedCategories={selectedCategories} />);
    expect(screen.getByText(/category 1/i)).toBeInTheDocument();
    expect(screen.getByText(/category 2/i)).toBeInTheDocument();
  });

  it('renders "Selected Categories" title', () => {
    render(<SelectedCategories selectedCategories={new Map()} />);
    expect(screen.getByText(/selected categories/i)).toBeInTheDocument();
  });
});
