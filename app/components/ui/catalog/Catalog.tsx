import { FC, useState } from 'react'
import { IProduct } from 'types/product.interface'

import Carousel from '@/components/ui/catalog/carousel/Carousel'
import Sorting from '@/components/ui/catalog/sorting/Sorting'
import { EnumSorting } from '@/components/ui/catalog/sorting/sorting.interface'

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST)
	return (
		<div>
			<div className='text-right mt-10'>
				<Sorting sortType={sortType} setSortType={setSortType} />
			</div>
			<Carousel products={products} />
		</div>
	)
}

export default Catalog
