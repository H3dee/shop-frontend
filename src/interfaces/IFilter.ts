import { ISubCategoriesName as subCategoriesName } from "../redux/interfaces/ISubCategoryName";

export interface FilterProps {
  title: string;
  items?: subCategoriesName[];
  prices?: string[];
}
