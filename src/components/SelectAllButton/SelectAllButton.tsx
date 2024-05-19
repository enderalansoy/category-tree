import React from 'react';
import Button from '../Button/Button';
import { Category, CategoryMap } from '../../App';

interface SelectAllButtonProps {
  categories: Category[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<CategoryMap>>;
}

/**
 * A button component that selects all categories when clicked.
 * 
 * @param {object} props - The properties object.
 * @param {Category[]} props.categories - The array of category objects.
 * @param {React.Dispatch<React.SetStateAction<CategoryMap>>} props.setSelectedCategories - The function to set the selected categories.
 * 
 * @returns {JSX.Element} The rendered select all button component.
 */
const SelectAllButton: React.FC<SelectAllButtonProps> = ({ categories, setSelectedCategories }) => {
  /**
   * Handles the select all action by setting all categories as selected.
   */
  const handleSelectAll = () => {
    const allCategoryMap = new Map(categories.map(category => [category.id, category.name]));
    setSelectedCategories(allCategoryMap);
  };

  return (
    <Button onClick={handleSelectAll} label="Select All" ariaLabel="Select all categories" />
  );
};

export default SelectAllButton;
