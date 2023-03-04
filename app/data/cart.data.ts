import { ICartItem } from 'types/cart.interface'

export const cartData: ICartItem[] = [
	{
		id: 1,
		product: {
			id: 1,
			description:
				'Calories Total Fat 19g Saturated Fat 13g Trans Fat 0.5g 29% 65%',
			name: 'Midnight Mint Mocha Frappuccino',
			slug: 'midnight-mint-mocha-frappuccino',
			images: [
				'/images/products/peppermint.png',
				'/images/products/sugar-cookie.png',
				'/images/products/mocha-cookie.png'
			],
			price: 9,
			reviews: []
		},
		quantity: 1
	}
]
