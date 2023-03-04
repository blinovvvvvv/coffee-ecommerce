import Image from 'next/image'
import { FC } from 'react'

import logo from '@/assets/logo.png'

const Logo: FC = () => {
	return <Image src={logo} alt={'logo'} width={40} height={40} />
}

export default Logo
