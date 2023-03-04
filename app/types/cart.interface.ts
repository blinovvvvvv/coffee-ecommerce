import { IProduct } from 'types/product.interface'

import { TypeSize } from '@/store/cart/cart.types'

export interface ICartItem {
	id: number
	quantity: number
	product: IProduct
	size: TypeSize
}
