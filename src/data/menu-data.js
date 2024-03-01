
const menu_data = [
  {
    id: 1,
    homes: true,
    title: 'Home',
    link: '/',
    // home_pages: [
    //   {
    //     img: home_1,
    //     title: 'Electronics',
    //     link: '/'
    //   },
    //   {
    //     img: home_2,
    //     title: 'Fashion',
    //     link: '/home-2'
    //   },
    //   {
    //     img: home_3,
    //     title: 'Beauty',
    //     link: '/home-3'
    //   },
    //   {
    //     img: home_4,
    //     title: 'Jewelry',
    //     link: '/home-4'
    //   }
    // ]
  },
  {
    id: 2,
    products: true,
    title: 'Products',
    link: '/shop',
    product_pages: [
      {
        title: 'Shop Page',
        link: '#',
        mega_menus: [
          { title: 'Categories', link: '/shop-category' },
          { title: 'Shop', link: '/shop' },
          // { title: 'Product Details', link: '/product-details' },
        ]
      },
      {
        title: 'Products',
        link: '#',
        mega_menus: [
          { title: 'Cloths', link: '/shop?category=clothing' },
          { title: 'Shoes', link: '/shop?category=shoes' },
        ]
      },
      {
        title: 'eCommerce',
        link: '#',
        mega_menus: [
          { title: 'Shopping Cart', link: '/cart' },
          { title: 'Compare', link: '/compare' },
          { title: 'Wishlist', link: '/wishlist' },
          { title: 'Checkout', link: '/checkout' },
          
        ]
      },
      {
        title: 'My Account',
        link: '#',
        mega_menus: [
          { title: 'Profile', link: '/profile' },
          { title: 'Login', link: '/login' },
          { title: 'Register', link: '/register' },
          // { title: 'Forgot Password', link: '/forgot' },
          // { title: '404 Error', link: '/404' },
        ]
      },
    ]
  },
  {
    id: 3,
    // sub_menu: true,
    single_link: true,
    title: 'Shop',
    link: '/shop',
    // sub_menus: [
    //   { title: 'Shop', link: '/shop' },
    //   { title: 'Right Sidebar', link: '/shop-right-sidebar' },
    //   { title: 'Hidden Sidebar', link: '/shop-hidden-sidebar' },
    // ],
  },
  {
    id: 4,
    single_link: true,
    title: 'Coupons',
    link: '/coupon',
  },
  {
    id: 5,
    // sub_menu: true,
    single_link: true,
    title: 'Blog',
    link: '/blog',
    // sub_menus: [
    //   { title: 'Blog Standard', link: '/blog' },
    //   { title: 'Blog Grid', link: '/blog-grid' },
    //   { title: 'Blog List', link: '/blog-list' },
    //   { title: 'Blog Details', link: '/blog-details' },
    //   { title: 'Blog Details Full Width', link: '/blog-details-2' },
    // ]
  },
  {
    id: 6,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]

export default menu_data;

// mobile_menu
export const mobile_menu = [
  {
    id: 1,
    homes: true,
    title: 'Home',
    link: '/',
    // home_pages: [
    //   {
    //     img: home_1,
    //     title: 'Electronics',
    //     link: '/'
    //   },
    //   {
    //     img: home_2,
    //     title: 'Fashion',
    //     link: '/home-2'
    //   },
    //   {
    //     img: home_3,
    //     title: 'Beauty',
    //     link: '/home-3'
    //   },
    //   {
    //     img: home_4,
    //     title: 'Jewelry',
    //     link: '/home-4'
    //   }
    // ]
  },
  {
    id: 2,
    products: true,
    title: 'Products',
    link: '/shop',
    product_pages: [
      {
        title: 'Shop Page',
        link: '#',
        mega_menus: [
          { title: 'Categories', link: '/shop-category' },
          { title: 'Shop', link: '/shop' },
          // { title: 'Product Details', link: '/product-details' },
        ]
      },
      {
        title: 'Products',
        link: '#',
        mega_menus: [
          { title: 'Cloths', link: '/shop?category=clothing' },
          { title: 'Shoes', link: '/shop?category=shoes' },
        ]
      },
      {
        title: 'eCommerce',
        link: '#',
        mega_menus: [
          { title: 'Shopping Cart', link: '/cart' },
          { title: 'Compare', link: '/compare' },
          { title: 'Wishlist', link: '/wishlist' },
          { title: 'Checkout', link: '/checkout' },
          
        ]
      },
      {
        title: 'My Account',
        link: '#',
        mega_menus: [
          { title: 'Profile', link: '/profile' },
          { title: 'Login', link: '/login' },
          { title: 'Register', link: '/register' },
          // { title: 'Forgot Password', link: '/forgot' },
          // { title: '404 Error', link: '/404' },
        ]
      },
    ]
  },
  {
    id: 3,
    // sub_menu: true,
    single_link: true,
    title: 'Shop',
    link: '/shop',
    // sub_menus: [
    //   { title: 'Shop', link: '/shop' },
    //   { title: 'Right Sidebar', link: '/shop-right-sidebar' },
    //   { title: 'Hidden Sidebar', link: '/shop-hidden-sidebar' },
    // ],
  },
  {
    id: 4,
    single_link: true,
    title: 'Coupons',
    link: '/coupon',
  },
  {
    id: 5,
    // sub_menu: true,
    single_link: true,
    title: 'Blog',
    link: '/blog',
    // sub_menus: [
    //   { title: 'Blog Standard', link: '/blog' },
    //   { title: 'Blog Grid', link: '/blog-grid' },
    //   { title: 'Blog List', link: '/blog-list' },
    //   { title: 'Blog Details', link: '/blog-details' },
    //   { title: 'Blog Details Full Width', link: '/blog-details-2' },
    // ]
  },
  {
    id: 6,
    single_link: true,
    title: 'Contact',
    link: '/contact',
  },
]