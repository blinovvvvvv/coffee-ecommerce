import { Heading } from '@chakra-ui/react'
import { products } from 'data/product.data'
import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import Catalog from '@/components/ui/catalog/Catalog'

const Home: FC = () => {
	return (
		<Layout title={'Home'} description={'Here you can buy some coffee ;)'}>
			<div className='mt-20'>
				<Heading className='text-right text-green'>
					The happiest hour of the year
				</Heading>
				<Catalog products={products} />
			</div>
		</Layout>
	)
}

export default Home
