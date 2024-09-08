/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "www.kdnuggets.com",
      "miro.medium.com",
      "www.simplilearn.com",
      "saisystems.com",
      "media.istockphoto.com",
      "d3i71xaburhd42.cloudfront.net",
      "ibb.co.com",
      "flowbite.s3.amazonaws.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "",
      },
      { protocol: "https", hostname: "res.cloudinary.com", port: "" },
      { protocol: "https", hostname: "images.pexels.com", port: "" },
      { protocol: "https", hostname: "images.unsplash.com", port: "" },
    ],
  },
};

export default nextConfig;
