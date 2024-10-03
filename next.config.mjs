/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/company/genr8-studios",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/genr8_studios",
        permanent: true,
      },
      {
        source: "/play-necros-revenge",
        destination: "https://genr8-studios.itch.io/necros-revenge",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
