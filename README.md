# Otrium Faceted Checkbox Tree

## Introduction

This project implements a faceted checkbox tree component using React. The UI displays a tree of checkboxes with names for the categories. It is designed to be mobile-friendly and accessible, ensuring a great user experience across devices.

## Features

- Expandable and collapsible category tree.
- Select and deselect categories and subcategories.
- Display selected categories.
- "Select All" button to select all categories.
- Accessible and mobile-friendly design.

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x)

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/enderalansoy/category-tree.git
   cd category-tree
   ```

2. Install the dependencies using npm:
   ```sh 
   bun install
   ```

3. Start the development server:
   ```sh
   bun run dev
   ```

4. Navigate to http://localhost:5173/

### File structure

```sh
src/
├── components/
│   ├── Checkbox/
│   │   ├── Checkbox.tsx
│   │   └── Checkbox.module.css
│   ├── TreeNode/
│   │   ├── TreeNode.tsx
│   │   └── TreeNode.module.css
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.module.css
│   ├── CategoryTree/
│   │   ├── CategoryTree.tsx
│   │   └── CategoryTree.module.css
│   ├── SelectedCategories/
│   │   ├── SelectedCategories.tsx
│   │   └── SelectedCategories.module.css
│   ├── SelectAllButton/
│   │   ├── SelectAllButton.tsx
│   │   └── SelectAllButton.module.css
├── data/
│   └── response.json
├── theme/
│   └── theme.css
├── App.tsx
├── App.css
└── main.tsx

```

### Testing

This project uses Vitest along with React Testing Library for unit testing.

- Checkbox: `src/components/Checkbox/Checkbox.test.tsx`
- Button: `src/components/Button/Button.test.tsx`
- TreeNode: `src/components/TreeNode/TreeNode.test.tsx`
- SelectedCategories: `src/components/- SelectedCategories/SelectedCategories.test.tsx`
- SelectAllButton: `src/components/SelectAllButton/SelectAllButton.test.tsx`

### Accessibility

The application is designed with accessibility in mind. Key accessibility features include:

- ARIA roles and labels for better screen reader support.
- Keyboard navigation support.
- Responsive design for a better mobile experience.
