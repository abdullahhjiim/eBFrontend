/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['i.ibb.co','lh3.googleusercontent.com','res.cloudinary.com'],
    // domains: ['i.ibb.co','media.istockphoto.com','freepngimg.com','e7.pngegg.com','encrypted-tbn0.gstatic.com', 'res.cloudinary.com'],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "freepngimg.com",
      },
      {
        protocol: "https",
        hostname: "e7.pngegg.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],

  },

  // distDir: "build",
  // // output:"export",

  // output : "export",
  images : {
    unoptimized : true,
  }
}

module.exports = nextConfig
