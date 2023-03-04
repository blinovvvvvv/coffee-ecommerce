import { FC } from 'react'

import Cart from '@/components/layout/header/cart/Cart'
import Logo from '@/components/layout/header/logo/Logo'
import Menu from '@/components/layout/header/menu/Menu'
import Search from '@/components/layout/header/search/Search'

import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<Logo />
				<Menu />
			</div>
			<Search />
			<Cart />
		</header>
	)
}

export default Header
