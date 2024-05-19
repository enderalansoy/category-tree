import React from 'react';
import Button from '../Button/Button';
import { Category, CategoryMap } from '../../App';

interface SelectAllButtonProps {
  categories: Category[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<CategoryMap>>;
}

const SelectAllButton: React.FC<SelectAllButtonProps> = ({ categories, setSelectedCategories }) => {
  const handleSelectAll = () => {
    const allCategoryMap = new Map(categories.map(category => [category.id, category.name]));
    setSelectedCategories(allCategoryMap);
  };

  return (
    <Button onClick={handleSelectAll} label="Select All" ariaLabel="Select all categories" />
  );
};

export default SelectAllButton;
