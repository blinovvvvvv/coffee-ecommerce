import { ICartItem } from 'types/cart.interface'

export interface ICartInitialState {
	items: ICartItem[]
}

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
	type: 'minus' | 'plus'
}

export type TypeSize = 'SHORT' | 'TALL' | 'GRANDE' | 'VENTI'

export interface IChangeSizePayload extends Pick<ICartItem, 'id'> {
	size: TypeSize
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}
