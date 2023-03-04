import { FC } from 'react'

import MenuItem from '@/components/layout/header/menu/menu-item/MenuItem'
import { menuData } from '@/components/layout/header/menu/menu.data'

import styles from './Menu.module.scss'

const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			{menuData.map(item => (
				<MenuItem key={item.link} item={item} />
			))}
		</div>
	)
}

export default Menu
