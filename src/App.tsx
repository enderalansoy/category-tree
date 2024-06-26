import React, { useState } from 'react';
import CategoryTree from './components/CategoryTree/CategoryTree';
import SelectedCategories from './components/SelectedCategories/SelectedCategories';
import SelectAllButton from './components/SelectAllButton/SelectAllButton';
import { data } from './data/response';
import './App.css';

export interface Category {
  id: string;
  name: string;
  parent: string;
}

export type CategoryMap = Map<string, string>;

/**
 * The main App component that renders the category tree, selected categories, and select all button.
 * 
 * @returns {JSX.Element} The rendered app component.
 */
const App: React.FC = () => {
  const { categories } = data;
  const [selectedCategories, setSelectedCategories] = useState<Map<string, string>>(new Map());

  /**
   * Handles the toggle action for selecting and deselecting categories.
   * 
   * @param {string} id - The ID of the category.
   * @param {string} name - The name of the category.
   * @param {boolean} selectAll - Indicates whether to select or deselect the category and its children.
   */
  const handleToggle = (id: string, name: string, selectAll: boolean) => {
    setSelectedCategories(prev => {
      const newSelectedCategories = new Map(prev);
      const toggleChildren = (categoryId: string) => {
        const childCategories = categories.filter(category => category.parent === categoryId);
        childCategories.forEach(child => {
          if (selectAll) {
            newSelectedCategories.set(child.id, child.name);
          } else {
            newSelectedCategories.delete(child.id);
          }
          toggleChildren(child.id);
        });
      };

      if (selectAll) {
        newSelectedCategories.set(id, name);
      } else {
        newSelectedCategories.delete(id);
      }
      toggleChildren(id);

      return newSelectedCategories;
    });
  };

  return (
    <div className="app">
      <h1 className="app__title">Otrium Faceted Checkbox Tree</h1>
      <div className="app__content">
        <div className="app__categories">
          <SelectAllButton
            categories={categories}
            setSelectedCategories={setSelectedCategories}
          />
          <CategoryTree
            categories={categories}
            selectedCategories={selectedCategories}
            onToggle={handleToggle}
          />
        </div>
        <div className="app__selected-categories">
          <SelectedCategories
            selectedCategories={selectedCategories}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
