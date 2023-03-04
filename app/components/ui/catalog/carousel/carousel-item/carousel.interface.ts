import { IProduct } from 'types/product.interface'

export interface ICarouselItem {
	index: number
	product: IProduct
}

export interface ICarouselNavigation extends Omit<ICarouselItem, 'index'> {
	isActive: boolean
	onSelectSlide: () => void
}
