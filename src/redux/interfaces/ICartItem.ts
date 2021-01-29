import { Product } from '../../interfaces/IProductCard'

interface ICartItem {
  amount: number
}

export type CartItem = Product & ICartItem
