import cn from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useState } from 'react'

import AddToCartButton from '@/components/ui/catalog/carousel/carousel-item/AddToCartButton'
import SizeVariations from '@/components/ui/catalog/carousel/carousel-item/SizeVariations'
import CarouselNavigation from '@/components/ui/catalog/carousel/carousel-item/carousel-navigation/CarouselNavigation'
import { ICarouselItem } from '@/components/ui/catalog/carousel/carousel-item/carousel.interface'
import { useCarousel } from '@/components/ui/catalog/carousel/useCarousel'

import { useActions } from '@/hooks/useActions'

import { TypeSize } from '@/store/cart/cart.types'

import styles from '../Carousel.module.scss'

const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')

	const { index: carouselIndex } = useCarousel()

	const { selectSlide } = useActions()

	const isActive = index === carouselIndex

	return (
		<motion.div
			className={cn(styles.item, {
				[styles.active]: isActive
			})}
			initial={{ scale: 1 }}
			animate={isActive ? { scale: 1.12 } : {}}
			transition={{ duration: 0.7, type: 'tween' }}
			aria-label='Select item'
			role='button'
		>
			<div>
				<CarouselNavigation
					onSelectSlide={() => selectSlide(index)}
					product={product}
					isActive={isActive}
				/>

				<button className={styles.heading} onClick={() => selectSlide(index)}>
					<span>{product.name}</span>
				</button>

				{isActive ? (
					<>
						<SizeVariations
							selectedSize={selectedSize}
							setSelectedSize={setSelectedSize}
						/>
						<AddToCartButton product={product} selectedSize={selectedSize} />
						<Link href={`/product/${product.slug}`} className={styles.link}>
							More information
						</Link>
					</>
				) : (
					<div className={styles.description}>{product.description}</div>
				)}
			</div>
		</motion.div>
	)
}

export default CarouselItem
