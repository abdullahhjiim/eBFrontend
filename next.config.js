/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['i.ibb.co','lh3.googleusercontent.com','res.cloudinary.com'],
    domains: ['media.istockphoto.com','freepngimg.com','e7.pngegg.com','encrypted-tbn0.gstatic.com', 'res.cloudinary.com'],
  },
  distDir: "build",
  output:"export",
}

module.exports = nextConfig
