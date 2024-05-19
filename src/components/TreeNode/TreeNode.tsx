import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import styles from './TreeNode.module.css';
import Button from '../Button/Button';
import { Category } from '../../App';

interface TreeNodeProps {
  category: Omit<Category, 'parent'>;
  children?: React.ReactNode;
  checked: boolean;
  onToggle: (id: string, name: string) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({ category, children, checked, onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.treeNode} role="treeitem" aria-expanded={isExpanded} aria-labelledby={`${category.id}-label`}>
      <div className={styles.treeNode__content}>
        <Checkbox 
          checked={checked} 
          onChange={() => onToggle(category.id, category.name)} 
          label={category.name}
          id={category.id}
        />
        {children && (
          <Button onClick={handleExpand} label={isExpanded ? '-' : '+'} variant="text" aria-label={`Expand ${category.name}`} />
        )}
      </div>
      {isExpanded && (
        <div className={styles.treeNode__children} role="group">
          {children}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
