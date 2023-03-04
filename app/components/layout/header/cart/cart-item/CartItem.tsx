import Image from 'next/image'
import { FC } from 'react'
import { ICartItem } from 'types/cart.interface'

import CartActions from '@/components/layout/header/cart/cart-item/cart-actions/CartActions'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from '../Cart.module.scss'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				src={item.product.images[0]}
				alt='product icon'
				width={100}
				height={100}
			/>
			<div>
				<div className={styles.name}>{item.product.name}</div>
				<div className={styles.price}>
					{formatToCurrency(item.product.price)}
				</div>
				<div className={styles.size}>{item.size}</div>
				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
