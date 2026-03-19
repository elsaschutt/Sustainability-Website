import CategoryPageLayout from '@/components/shared/CategoryPageLayout'

export const metadata = {
  title: 'Kitchen - Sustainable Living',
  description: 'Sustainable solutions for your kitchen—from reusable paper towels to plastic-free cleaning supplies',
}

const brands = [
  {
    name: 'Blueland',
    url: 'https://www.blueland.com/',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0057/9158/0227/files/Carousel_DTC_Multi_Spray_Final_2026_01.jpg?v=1769809182',
    imageAlt: 'Blueland Multi-Surface Spray Cleaner',
    certifications: ['B Corp', 'Climate Neutral', 'C2C Platinum', 'EPA Safer Choice'],
    products: 'Cleaning tablets, dish soap, dishwasher detergent, hand soap',
    startingPrice: '$16',
  },
  {
    name: 'Seventh Generation',
    url: 'https://www.seventhgeneration.com/',
    imageUrl: 'https://seventhgeneration.com/sites/default/files/2025-03/2024_325_product-hero-dish_b_right.png',
    imageAlt: 'Seventh Generation Dish Products',
    certifications: ['B Corp', 'EPA Safer Choice', 'USDA Biobased'],
    products: 'All-purpose cleaners, dish soap, dishwasher detergent, paper products',
    startingPrice: '$4',
  },
  {
    name: 'Method',
    url: 'https://methodproducts.com/collections/kitchen',
    imageUrl: 'https://methodproducts.com/cdn/shop/files/53590_18oz_PETDish_SeaMinerals_Front_318972_onwhite__90143.1726062643.386.513_83babad7-69c3-43fc-b6c7-45b8f4167ebc.jpg?v=1742968863',
    imageAlt: 'Method Dish Soap Sea Minerals',
    certifications: ['B Corp'],
    products: 'Dish soap, dishwasher packs, degreaser, kitchen cleaners',
    startingPrice: '$5',
  },
  {
    name: 'ECOS',
    url: 'https://www.ecos.com/',
    imageUrl: 'https://www.ecos.com/wp-content/uploads/2023/05/1_DishSoap_Grapefruit_25oz_Front.png',
    imageAlt: 'ECOS Dish Soap Grapefruit',
    certifications: ['B Corp', 'EPA Safer Choice'],
    products: 'Dish soap, dishwasher gel, all-purpose cleaners',
    startingPrice: '$5',
  },
  {
    name: 'Common Good',
    url: 'https://www.commongoodandco.com/',
    imageUrl: 'https://www.commongoodandco.com/cdn/shop/files/PDPSlides-DishSoapPouch.png?v=1738963176&width=533',
    imageAlt: 'Common Good Dish Soap Refill Pouch',
    certifications: ['Leaping Bunny'],
    products: 'Dish soap, all-purpose cleaners, refill pouches',
    startingPrice: '$20',
  },
  {
    name: 'Rebel Green',
    url: 'https://rebelgreen.com/',
    imageUrl: 'https://rebelgreen.com/cdn/shop/files/FVC16oz_2pk.jpg?v=1744139103&width=533',
    imageAlt: 'Rebel Green Fruit and Veggie Clean',
    certifications: ['B Corp', 'USDA Certified Organic'],
    products: 'Fruit & veggie clean, all-purpose spray, kitchen cleaners',
    startingPrice: '$15',
  },
  {
    name: 'Papaya Reusables',
    url: 'https://www.papayareusables.com/',
    products: 'Reusable paper towels, reusable bags',
    startingPrice: '$14',
  },
  {
    name: 'Stasher',
    url: 'https://www.stasherbag.com/',
    products: 'Sandwich bag, snack bag, stretchable lids, bowls',
    startingPrice: '$10',
  },
  {
    name: 'Silpat',
    products: 'Silicone Baking Mat',
    startingPrice: '$20',
  },
  {
    name: 'OXO',
    products: 'Silicone Baking Mat',
    startingPrice: '$21',
  },
]

export default function KitchenPage() {
  return (
    <CategoryPageLayout
      title="Kitchen"
      description="Sustainable solutions for your kitchen—from reusable paper towels to plastic-free cleaning supplies"
      brands={brands}
      theme="kitchen"
    />
  )
}
