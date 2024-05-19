import { render, screen, fireEvent } from '@testing-library/react';
import TreeNode from './TreeNode';

const category = { id: '1', name: 'Category 1', parent: '0' };

describe('TreeNode component', () => {
  it('toggles expansion when expand button is clicked', () => {
    render(
      <TreeNode category={category} checked={false} onToggle={() => { }}>
        <div>Child</div>
      </TreeNode>
    );
    const expandButton = screen.getByText('+');
    fireEvent.click(expandButton);
    expect(screen.getByText(/child/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText('-'));
    expect(screen.queryByText(/child/i)).not.toBeInTheDocument();
  });
});
