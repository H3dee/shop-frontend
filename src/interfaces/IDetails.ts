import { Product } from "./IProductCard";

export interface DetailsProps {
  setTypeHandler(type: string): void
  type: string
}

export type Details = DetailsProps & Product
