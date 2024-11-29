/** @type {import('next').NextConfig} */
const nextConfig = { 
    reactStrictMode: true, swcMinify: true,
    images: {
        domains: ['lh3.googleusercontent.com','via.placeholder.com'],
      },
      async headers() {
        return [
          {
            source: "/api/:path",
            headers: [
              {
                key: "Access-Control-Allow-Headers",
                value: "Content-Type, Authorization",
              },
            ],
          },
        ];
      },
 };

export default nextConfig;
