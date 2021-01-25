import { Category as CategoryDTO } from "../api/generated";
import { ID } from "../interfaces/IPromotedCategory";
import { getParentId } from "./getParentId";

export const getSubCategoriesById: (
  subCategories: CategoryDTO[],
  id: ID,
) => CategoryDTO[] = (subCategories, id) =>
  subCategories
    .filter((subCategory) => getParentId(subCategory) === id)
    .splice(0, 6);
