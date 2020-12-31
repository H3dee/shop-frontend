export interface SubCategory{
      id: number,
      image: string | null,
      name: string,
      parent: number | null,
      sub_category: null,
      updated_at: string
}

export interface MenuCategory {
      id: number,
      image: string | null,
      name: string,
      parent: number | null,
      subCategories: SubCategory[] | null,
      sub_category: null,
      updated_at: string
}

export interface HoveredMenuProps {
      items: SubCategory[] | null | undefined
}