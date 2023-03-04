import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { COLORS } from 'config/color.config'
import { FC } from 'react'
import { ICartItem } from 'types/cart.interface'

import { useActions } from '@/hooks/useActions'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 1,
			max: 5
		})

	const { removeFromCart, changeQuantity } = useActions()

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	return (
		<>
			<HStack maxW='320px' mt={2}>
				<Button
					{...dec}
					size='sm'
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
				>
					<MinusIcon fontSize={14} />
				</Button>
				<Input size='sm' {...input} />
				<Button
					{...inc}
					onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
					size='sm'
				>
					<AddIcon />
				</Button>
			</HStack>
			<Button
				variant={'link'}
				mt={2}
				fontSize={16}
				color={COLORS.red}
				onClick={() => removeFromCart({ id: item.id })}
			>
				Delete
			</Button>
		</>
	)
}

export default CartActions
