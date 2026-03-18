import BrandItem from '@/components/shared/BrandItem'

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
    description: 'Plastic-free sustainable cleaning supplies. Replace plastic bottles with cleaning tablets for a more sustainable home. Refillable "forever bottles" with 100% microplastic-free formulas — over 1 billion single-use bottles diverted from landfills.',
    products: 'Cleaning tablets, dish soap, dishwasher detergent, laundry detergent, hand soap',
    prices: [
      { price: '$16', item: 'Multisurface cleaner starter set' },
      { price: '$18', item: 'Dish soap starter set' },
      { price: '$25', item: 'Dishwasher detergent starter set' },
      { price: '$25', item: 'Laundry detergent starter set' },
    ],
  },
  {
    name: 'Seventh Generation',
    url: 'https://www.seventhgeneration.com/',
    imageUrl: 'https://seventhgeneration.com/sites/default/files/2025-03/2024_325_product-hero-dish_b_right.png',
    imageAlt: 'Seventh Generation Dish Products',
    certifications: ['B Corp', 'EPA Safer Choice', 'USDA Biobased'],
    description: 'Plant-based cleaning formulas with the Climate Fingerprints framework. EPA Safer Choice certified, meaning every ingredient meets strict safety standards for people and the planet.',
    products: 'All-purpose cleaners, dish soap, dishwasher detergent, paper products',
    prices: [
      { price: '$4–$6', item: 'Dish soap (various scents)' },
      { price: '$6–$8', item: 'All-purpose cleaner spray' },
      { price: '$7–$10', item: 'Dishwasher detergent packs' },
    ],
  },
  {
    name: 'Method',
    url: 'https://methodproducts.com/collections/kitchen',
    imageUrl: 'https://methodproducts.com/cdn/shop/files/53590_18oz_PETDish_SeaMinerals_Front_318972_onwhite__90143.1726062643.386.513_83babad7-69c3-43fc-b6c7-45b8f4167ebc.jpg?v=1742968863',
    imageAlt: 'Method Dish Soap Sea Minerals',
    certifications: ['B Corp'],
    description: 'Plant-based kitchen cleaners in stylish, design-forward bottles. Cruelty-free formulas that make sustainable cleaning look as good as it works. Their kitchen line includes dish soap, degreaser, and dishwasher packs.',
    products: 'Dish soap, dishwasher packs, heavy duty degreaser, kitchen cleaners',
    prices: [
      { price: '$5', item: 'Dish soap (18 fl oz)' },
      { price: '$13', item: 'Dishwasher packs (54 ct)' },
      { price: '$6', item: 'Heavy duty degreaser (28 fl oz)' },
    ],
  },
  {
    name: 'ECOS',
    url: 'https://www.ecos.com/',
    imageUrl: 'https://www.ecos.com/wp-content/uploads/2023/05/1_DishSoap_Grapefruit_25oz_Front.png',
    imageAlt: 'ECOS Dish Soap Grapefruit',
    certifications: ['B Corp', 'EPA Safer Choice'],
    description: 'Carbon neutral, water neutral, and TRUE Platinum Zero Waste certified. Plant-powered dish soaps and all-purpose cleaners made with ingredients sourced from renewable materials like coconuts.',
    products: 'Dish soap, dishwasher gel, all-purpose cleaners',
    prices: [
      { price: '$5', item: 'Dish soap (25 oz)' },
      { price: '$7', item: 'Dishwasher gel (40 oz)' },
      { price: '$5', item: 'All-purpose cleaner' },
    ],
  },
  {
    name: 'Common Good',
    url: 'https://www.commongoodandco.com/',
    imageUrl: 'https://www.commongoodandco.com/cdn/shop/files/PDPSlides-DishSoapPouch.png?v=1738963176&width=533',
    imageAlt: 'Common Good Dish Soap Refill Pouch',
    certifications: ['Leaping Bunny'],
    description: 'Refillable cleaning products with a mission to eliminate single-use plastic. Their refill station model and non-GMO ingredients make sustainable cleaning easy and affordable.',
    products: 'Dish soap, all-purpose cleaners, refill pouches and boxes',
    prices: [
      { price: '$20', item: 'Dish soap refill pouch (34 fl oz)' },
      { price: '$66', item: 'Spring cleaning starter set' },
      { price: '$167', item: 'Laundry refill box (2.5 gal)' },
    ],
  },
  {
    name: 'Rebel Green',
    url: 'https://rebelgreen.com/',
    imageUrl: 'https://rebelgreen.com/cdn/shop/files/FVC16oz_2pk.jpg?v=1744139103&width=533',
    imageAlt: 'Rebel Green Fruit and Veggie Clean',
    certifications: ['B Corp', 'USDA Certified Organic'],
    description: 'Plant-powered cleaning products including a fruit and veggie wash and all-purpose sprays. Also offers tree-free bamboo paper products for a fully sustainable kitchen.',
    products: 'Fruit & veggie clean, all-purpose spray, kitchen cleaners',
    prices: [
      { price: '$18', item: 'Fruit & Veggie Clean 16 oz (2-pack)' },
      { price: '$15', item: 'All Purpose Spray 16 oz (2-pack)' },
    ],
  },
  {
    name: 'Papaya Reusables',
    url: 'https://www.papayareusables.com/',
    description: 'Started by husband and wife who noticed after having their first daughter how bulky, expensive, and wasteful paper towels were. Determined to find an alternative which led them to creating Papaya. The reusable towels are made out of 70% cellulose and 30% cotton and are 100% compostable. They are machine washable and dishwasher safe.',
    products: 'Reusable paper towels, reusable bags',
    prices: [
      { price: '$18', item: '2-pack reusable paper towels + 1 hook' },
      { price: '$36', item: '4-pack reusable paper towels + 2 hooks' },
      { price: '$14', item: 'Reusable everything bags' },
    ],
  },
  {
    name: 'Stasher',
    url: 'https://www.stasherbag.com/',
    description: 'Reusable plastic bag alternative made from platinum silicone. A sustainable solution to single-use plastic bags.',
    products: 'Sandwich bag, snack bag, stretchable lids, bowls',
    prices: [
      { price: '$10.39', item: 'Sandwich bag' },
      { price: '$19.99', item: 'Stretchable lid 4-pack' },
      { price: '$12.99', item: '1-cup bowl' },
    ],
  },
  {
    name: 'Silpat',
    description: 'Silicone baking mats that replace parchment paper. Parchment paper helps savory dishes and sweet treats slide off the pan easily but is single-use and hard to compost or recycle. A silicon baking mat is a great alternative and is easy to clean.',
    products: 'Silicone Baking Mat',
    prices: [
      { price: '$28.50', item: 'Silpat Half Size Baking Mat' },
      { price: '$20', item: 'Silpat 9" Round Mat' },
    ],
  },
  {
    name: 'OXO',
    description: 'Slightly cheaper alternative to Silpat for silicone baking mats.',
    products: 'Silicone Baking Mat',
    prices: [
      { price: '$21.50', item: 'Silicone Baking Mat' },
    ],
  },
]

export default function KitchenPage() {
  return (
    <main>
      <div className="page-header">
        <h1>Kitchen</h1>
        <p>Sustainable solutions for your kitchen—from reusable paper towels to plastic-free cleaning supplies</p>
      </div>

      <div className="section">
        <div className="container">
          {brands.map((brand) => (
            <BrandItem key={brand.name} {...brand} />
          ))}
        </div>
      </div>
    </main>
  )
}
