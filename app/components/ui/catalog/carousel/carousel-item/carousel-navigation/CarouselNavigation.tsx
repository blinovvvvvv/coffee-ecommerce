import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { products } from 'data/product.data'
import Image from 'next/image'
import { FC } from 'react'

import { ICarouselNavigation } from '@/components/ui/catalog/carousel/carousel-item/carousel.interface'

import { useActions } from '@/hooks/useActions'

import styles from './CarouselNavigation.module.scss'

const CarouselNavigation: FC<ICarouselNavigation> = ({
	isActive,
	onSelectSlide,
	product
}) => {
	const { nextSlide, prevSlide } = useActions()

	return (
		<div className={styles.navigation}>
			{isActive && (
				<div className={styles.arrows}>
					<button onClick={() => prevSlide()} className={styles.arrow}>
						<ChevronLeftIcon fontSize={46} />
					</button>
					<button
						onClick={() => nextSlide({ carouselLength: products.length })}
						className={styles.arrow}
					>
						<ChevronRightIcon fontSize={46} />
					</button>
				</div>
			)}
			<button onClick={onSelectSlide} className={styles.image}>
				<Image
					alt={product.name}
					src={product.images[0]}
					width={315}
					height={315}
					draggable={false}
				/>
			</button>
		</div>
	)
}

export default CarouselNavigation
