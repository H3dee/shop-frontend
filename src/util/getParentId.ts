import { Category } from "../api/generated"

type subCategoryParent = {
      id: string
}

export const getParentId = (subCategory: Category) => {
      const parent: subCategoryParent | undefined = subCategory.parent as subCategoryParent
      if(!subCategory) return undefined;

      return  parent.id
}