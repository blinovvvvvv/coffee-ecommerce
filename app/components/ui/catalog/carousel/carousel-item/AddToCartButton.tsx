import { Button } from '@chakra-ui/react'
import { FC } from 'react'
import { IProduct } from 'types/product.interface'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { TypeSize } from '@/store/cart/cart.types'

interface IAddToCartButton {
	product: IProduct
	selectedSize: TypeSize
}

const AddToCartButton: FC<IAddToCartButton> = ({ product, selectedSize }) => {
	const { cart } = useCart()
	const { addToCart, removeFromCart } = useActions()
	const cartElement = cart.find(
		cartItem =>
			cartItem.product.id === product.id && cartItem.size === selectedSize
	)
	console.log(cartElement?.id)

	return (
		<div className={'text-center'}>
			<Button
				className='tracking-widest'
				marginTop={8}
				borderRadius={20}
				fontWeight={500}
				fontSize={16}
				textTransform='uppercase'
				onClick={() =>
					cartElement
						? removeFromCart({ id: cartElement.id })
						: addToCart({ product, quantity: 1, size: selectedSize })
				}
			>
				{cartElement ? 'Remove from basket' : 'Add to basket'}
			</Button>
		</div>
	)
}

export default AddToCartButton
