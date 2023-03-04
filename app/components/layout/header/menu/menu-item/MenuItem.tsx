import Link from 'next/link'
import { FC } from 'react'

import { IMenuItem } from '@/components/layout/header/menu/menu-item/menu-item.interface'

import styles from '../Menu.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	return (
		<Link href={item.link} className={styles.item}>
			{item.title}
		</Link>
	)
}

export default MenuItem
