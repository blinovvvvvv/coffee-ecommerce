import { FC } from 'react'
import { IProduct } from 'types/product.interface'

import CarouselItem from '@/components/ui/catalog/carousel/carousel-item/CarouselItem'

import styles from './Carousel.module.scss'

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div className={styles.carousel}>
			{products.map((item, index) => (
				<CarouselItem key={index} index={index} product={item} />
			))}
		</div>
	)
}

export default Carousel
