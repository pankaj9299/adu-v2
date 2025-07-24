// utils/mergeCategory.js
export const mergeCategoryWithSubcategory = ({
    category,
    subcategory,
    option,
    selectedProductState
  }) => {
    const selectedSubcategory = {
      id: subcategory.id,
      name: subcategory.name,
      options: [option],
    };
  
    const currentCategories = selectedProductState.categories || [];
    const categoryIndex = currentCategories.findIndex((cat) => cat.id === category.id);
    const updatedCategories = [...currentCategories];
  
    if (categoryIndex !== -1) {
      const existingCategory = updatedCategories[categoryIndex];
      const existingSubIndex = existingCategory.subcategories?.findIndex(
        (sub) => sub.id === subcategory.id
      );
  
      if (existingSubIndex !== -1) return currentCategories; // already exists, skip
  
      const updatedSubcategories = [...(existingCategory.subcategories || []), selectedSubcategory];
  
      updatedCategories[categoryIndex] = {
        ...existingCategory,
        subcategories: updatedSubcategories,
      };
    } else {
      const newCategory = {
        id: category.id,
        name: category.name,
        type: category.type,
        subcategories: [selectedSubcategory],
        addons: category.addons || [],
      };
  
      updatedCategories.push(newCategory);
    }
  
    return updatedCategories;
  };
  