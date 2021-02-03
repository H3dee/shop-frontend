import { ProductDetails, ProductSpecs } from "../api/generated"

export interface ProductCardProps {
  id: number | string
  imageUrl?: string
  productName: string
  price: number
  details?: ProductDetails[]
  specs?: ProductSpecs[]
  isExpanded?: boolean
}

export type Product = ProductCardProps
