import { ID } from "./IPromotedCategory";

export interface DetailsProps {
  setTypeHandler(type: string): void
  type: string
  id: ID | undefined,
  price: number | undefined,
  productName: string | undefined,
  imageUrl: string | undefined
}

export type Details = DetailsProps
