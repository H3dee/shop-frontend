import { Product } from "./IProductCard";

export type ID = number | string

interface ParentCategory {
    imgUrl: string,
    name: string
}

interface Subcategory {
    id: ID
    name: string,
}

export interface PromotedCategory {
    id: ID
    parent: ParentCategory,
    subcategoriesNames: Subcategory[],
    products?: Product[]
}

export type PromotedCategoryProps = PromotedCategory