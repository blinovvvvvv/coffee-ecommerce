import { ChakraProvider } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from '@/store/store'

import '../styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ChakraProvider>
					<main className={inter.className}>
						<Component {...pageProps} />
					</main>
				</ChakraProvider>
			</PersistGate>
		</Provider>
	)
}
