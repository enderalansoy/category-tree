import React from 'react';
import styles from './SelectedCategories.module.css';
import { CategoryMap } from '../../App';

interface SelectedCategoriesProps {
  selectedCategories: CategoryMap;
}

const SelectedCategories: React.FC<SelectedCategoriesProps> = ({ selectedCategories }) => {
  return (
    <div className={styles.selectedCategories}>
      <h3 className={styles.selectedCategories__title}>Selected Categories:</h3>
      <ul className={styles.selectedCategories__list}>
        {[...selectedCategories].map(([id, name]) => (
          <li key={id} className={styles.selectedCategories__item} role="listitem">
            {`${id}: ${name}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedCategories;
