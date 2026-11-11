/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/coliving/shubh-nirvana",
        destination: "/coliving/nirvana",
        permanent: true,
      },
      {
        source: "/coliving/vipasana",
        destination: "/coliving/vipasna",
        permanent: true,
      },
      {
        source: "/student-housing/abc-near-sls",
        destination: "/student-housing/shubh-gateway",
        permanent: true,
      },
      {
        source: "/student-housing/sakore-nagar",
        destination: "/student-housing/brindavan",
        permanent: true,
      },
      {
        source: "/student-housing/xyz-near-scms",
        destination: "/student-housing/brindavan",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
};

export default nextConfig;
