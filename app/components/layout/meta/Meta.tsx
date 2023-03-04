import Head from 'next/head'
import { useRouter } from 'next/router'
import * as process from 'process'
import { FC, PropsWithChildren } from 'react'

import { ISeo } from '@/components/layout/meta/meta.interface'

import { onlyText } from '@/utils/clear-text'

const Meta: FC<PropsWithChildren<ISeo>> = ({
	description,
	image = '/favicon.ico',
	title,
	type,
	children
}) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp='headline'>{title}</title>
				{description ? (
					<>
						<meta
							itemProp='description'
							name='description'
							content={onlyText(description, 152)}
						/>
						<link rel='canonical' href={currentUrl} />
						<meta property='og:type' content={type} />
						<meta property='og:locale' content='en' />
						<meta property='og:title' content={title} />
						<meta property='og:url' content={currentUrl} />
						<meta property='og:image' content={image} />
						<meta property='og:site_name' content={'coffee shop'} />
						<meta
							property='og:description'
							content={onlyText(description, 197)}
						/>
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>
			{children}
		</>
	)
}

export default Meta
