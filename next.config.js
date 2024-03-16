/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['i.ibb.co','lh3.googleusercontent.com','res.cloudinary.com'],
    domains: ['i.ibb.co','media.istockphoto.com','freepngimg.com','e7.pngegg.com','encrypted-tbn0.gstatic.com', 'res.cloudinary.com'],
  },

  distDir: "build",
  // output:"export",

  output : "export",
  images : {
    unoptimized : true,
  }
}

module.exports = nextConfig
