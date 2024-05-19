import React from 'react';
import CategoryNode from '../CategoryNode/CategoryNode';
import { Category, CategoryMap } from '../../App';

interface CategoryTreeProps {
  categories: Category[];
  selectedCategories: CategoryMap;
  onToggle: (id: string, name: string, selectAll: boolean) => void;
}

const CategoryTree: React.FC<CategoryTreeProps> = ({ categories, selectedCategories, onToggle }) => {
  const getChildren = (parentId: string) => {
    return categories.filter(category => category.parent === parentId);
  };

  const rootCategories = getChildren('0');

  return (
    <div className="category-tree" role="tree">
      {rootCategories.map(category => (
        <CategoryNode 
          key={category.id} 
          category={category} 
          getChildren={getChildren}
          selectedCategories={selectedCategories}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default CategoryTree;
