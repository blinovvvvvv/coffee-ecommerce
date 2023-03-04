import { EnumSorting, ISortingItem } from './sorting.interface'

export const sortingData: ISortingItem[] = [
	{
		label: 'Newest',
		value: EnumSorting.NEWEST
	},
	{
		label: 'Oldest',
		value: EnumSorting.OLDEST
	},
	{
		label: 'Price: low to high',
		value: EnumSorting.LOW_TO_HIGH_PRICE
	},
	{
		label: 'Price: high to low',
		value: EnumSorting.HIGH_TO_LOW_PRICE
	}
]
