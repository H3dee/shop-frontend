export interface ProductCardProps {
      id?: number | string
      imageUrl?: string,
      productName: string,
      price: string | number,
      isExpanded?: boolean
}

export type Product = ProductCardProps