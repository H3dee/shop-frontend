export interface ProductCardProps {
      id: number | string
      imageUrl?: string,
      productName: string,
      price: number,
      isExpanded?: boolean
}

export type Product = ProductCardProps