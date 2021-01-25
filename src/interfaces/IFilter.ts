import { subCategoriesName } from "../redux/category/interfaces/ISubCategoryName";

export interface FilterProps{
      title: string
      items?: subCategoriesName[]
      prices?: string[]
}