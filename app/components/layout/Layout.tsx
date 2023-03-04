import { FC, PropsWithChildren } from 'react'


import Meta from '@/components/layout/meta/Meta'
import { ISeo } from '@/components/layout/meta/meta.interface'

import styles from './Layout.module.scss'
import Header from '@/components/layout/header/Header'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<main className={styles.layout}>
				<Header />				
				<div className={styles.content}>{children}</div>
			</main>
		</>
	)
}

export default Layout
