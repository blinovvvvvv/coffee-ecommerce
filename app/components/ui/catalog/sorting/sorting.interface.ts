export enum EnumSorting {
	LOW_TO_HIGH_PRICE = 'low-to-high',
	HIGH_TO_LOW_PRICE = 'high-to-low',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export interface ISortingItem {
	label: 'Price: high to low' | 'Price: low to high' | 'Newest' | 'Oldest'
	value: EnumSorting
}
