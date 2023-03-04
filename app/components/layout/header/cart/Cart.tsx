import { HamburgerIcon } from '@chakra-ui/icons'
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure
} from '@chakra-ui/react'
import 'config/color.config'
import { COLORS } from 'config/color.config'
import { FC, useRef } from 'react'

import CartItem from '@/components/layout/header/cart/cart-item/CartItem'

import { useCart } from '@/hooks/useCart'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from './Cart.module.scss'

const Cart: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef()

	const { cart, total } = useCart()

	return (
		<div className={styles.cart}>
			<button ref={btnRef.current} onClick={onOpen} className={styles.info}>
				<span className={styles.count}>{cart.length}</span>
				<span className={styles.title}>MY BASKET</span>
				<HamburgerIcon />
			</button>

			<Drawer
				isOpen={isOpen}
				placement='right'
				onClose={onClose}
				finalFocusRef={btnRef.current}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Your basket</DrawerHeader>

					<DrawerBody>
						{cart.map(item => (
							<CartItem item={item} key={item.id} />
						))}
					</DrawerBody>

					<DrawerFooter
						justifyContent='space-between'
						borderTopColor={'#F7F4F0'}
						borderTopWidth={1}
					>
						<div className={styles.footer}>
							<div>Total:</div>
							<div>{formatToCurrency(total)}</div>
						</div>
						<Button
							variant='solid'
							bgColor={COLORS['light-green']}
							onClick={onClose}
						>
							Checkout
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default Cart
