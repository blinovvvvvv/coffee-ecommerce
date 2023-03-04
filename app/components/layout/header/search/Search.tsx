import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { COLORS } from 'config/color.config'
import { ChangeEvent, FC, useState } from 'react'

import styles from './Search.module.scss'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	return (
		<div className={styles.search}>
			<InputGroup size='sm'>
				<InputLeftElement pointerEvents='none'>
					<SearchIcon color='gray.300' />
				</InputLeftElement>
				<Input
					type='tel'
					value={searchTerm}
					onChange={e => changeHandler(e)}
					placeholder='Search'
					focusBorderColor={COLORS.green}
				/>
			</InputGroup>
		</div>
	)
}

export default Search
