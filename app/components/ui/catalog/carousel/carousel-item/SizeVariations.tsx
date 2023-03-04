import cn from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'

import { TypeSize } from '@/store/cart/cart.types'

import styles from '../Carousel.module.scss'

interface ISizeVariations {
	selectedSize: TypeSize
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>
}

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI']

const SizeVariations: FC<ISizeVariations> = ({
	selectedSize,
	setSelectedSize
}) => {
	return (
		<div className={styles.variations}>
			{SIZES.map(size => (
				<button
					key={size}
					className={cn(styles.size, {
						[styles.active]: size === selectedSize
					})}
					onClick={() => setSelectedSize(size)}
				>
					{size}
				</button>
			))}
		</div>
	)
}

export default SizeVariations
