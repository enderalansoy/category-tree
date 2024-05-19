import React from 'react';
import TreeNode from '../TreeNode/TreeNode';
import { CategoryMap } from '../../App';

interface CategoryNodeProps {
  category: { id: string; name: string };
  getChildren: (parentId: string) => { id: string; name: string; parent: string }[];
  selectedCategories: CategoryMap;
  onToggle: (id: string, name: string, selectAll: boolean) => void;
}

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
