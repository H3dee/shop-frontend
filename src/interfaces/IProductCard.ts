export interface ProductCardProps {
      id?: number | string
      imageUrl: string,
      productName: string,
      price: string
}

export type Product = ProductCardProps