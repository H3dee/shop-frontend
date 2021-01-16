export interface ProductCardProps {
      id?: number | string
      imageUrl: string,
      productName: string,
      price: string,
      isExpanded?: boolean
}

export type Product = ProductCardProps