import React from 'react';
import CategoryNode from '../CategoryNode/CategoryNode';
import { Category, CategoryMap } from '../../App';

interface CategoryTreeProps {
  categories: Category[];
  selectedCategories: CategoryMap;
  onToggle: (id: string, name: string, selectAll: boolean) => void;
}

/**
 * A component that renders a tree of categories.
 * 
 * @param {object} props - The properties object.
 * @param {Category[]} props.categories - The array of category objects.
 * @param {CategoryMap} props.selectedCategories - The map of selected categories.
 * @param {Function} props.onToggle - The function to call when a category is toggled.
 * 
 * @returns {JSX.Element} The rendered category tree component.
 */
const CategoryTree: React.FC<CategoryTreeProps> = ({ categories, selectedCategories, onToggle }) => {
  /**
   * Gets the children of a category by its parent ID.
   *
   * @param {string} parentId - The ID of the parent category.
   * @returns {Category[]} The array of child categories.
   */
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
