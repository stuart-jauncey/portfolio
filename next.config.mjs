/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        output: 'export',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
