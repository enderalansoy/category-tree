import React from 'react';
import TreeNode from '../TreeNode/TreeNode';
import { Category, CategoryMap } from '../../App';

interface CategoryNodeProps {
  category: Omit<Category, 'parent'>;
  getChildren: (parentId: string) => Category[];
  selectedCategories: CategoryMap;
  onToggle: (id: string, name: string, selectAll: boolean) => void;
}

/**
 * A component that represents a category node in the category tree.
 * 
 * @param {object} props - The properties object.
 * @param {Omit<Category, 'parent'>} props.category - The category object containing id and name, excluding parent.
 * @param {Function} props.getChildren - The function to get the children of a category.
 * @param {CategoryMap} props.selectedCategories - The map of selected categories.
 * @param {Function} props.onToggle - The function to call when a category is toggled.
 * 
 * @returns {JSX.Element} The rendered category node component.
 */
const CategoryNode: React.FC<CategoryNodeProps> = ({ category, getChildren, selectedCategories, onToggle }) => {
  const children = getChildren(category.id);

  const handleToggle = (id: string, name: string) => {
    const isParentSelected = selectedCategories.has(id);
    onToggle(id, name, !isParentSelected);
  };

  return (
    <TreeNode 
      category={category}
      checked={selectedCategories.has(category.id)}
      onToggle={handleToggle}
    >
      {children.length > 0 && (
        <div className="category-children">
          {children.map(child => (
            <CategoryNode 
              key={child.id} 
              category={child} 
              getChildren={getChildren}
              selectedCategories={selectedCategories}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </TreeNode>
  );
};

export default CategoryNode;
