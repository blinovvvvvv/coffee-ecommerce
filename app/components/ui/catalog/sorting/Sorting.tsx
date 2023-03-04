import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { Dispatch, FC, SetStateAction } from 'react'

import { sortingData } from '@/components/ui/catalog/sorting/sorting.data'
import { EnumSorting } from '@/components/ui/catalog/sorting/sorting.interface'

interface ISorting {
	sortType: EnumSorting
	setSortType: Dispatch<SetStateAction<EnumSorting>>
}
const Sorting: FC<ISorting> = ({ setSortType, sortType }) => {
	return (
		<div className='text-right max-w-[200px] ml-auto'>
			<Menu>
				<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
					{sortingData.find(sort => sort.value === sortType)?.label}
				</MenuButton>
				<MenuList>
					{sortingData.map(sort => (
						<MenuItem key={sort.value} onClick={() => setSortType(sort.value)}>
							{sort.label}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</div>
	)
}

export default Sorting
