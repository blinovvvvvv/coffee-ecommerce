/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	experimental: {
		esmExternals: false
	},
	env: {
		APP_URL: process.env.APP_URL
	}
}

module.exports = nextConfig
