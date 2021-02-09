import { SubCategory } from "../interfaces/IMenu";

export const getMenuSubCategories = (
  subCategories: SubCategory[],
  parentSubCategoryId: number
): SubCategory[] => subCategories.filter(subCategory => subCategory.id === parentSubCategoryId);
