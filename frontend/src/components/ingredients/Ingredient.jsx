import Link from 'next/link'
import Image from 'next/image'

interface Ingredient {
  name: string
  quantity: string
  price: string
  image: string
}

interface IngredientCategory {
  name: string
  items: Ingredient[]
}

const ingredientCategories: IngredientCategory[] = [
  {
    name: 'Oils',
    items: [
      { name: 'Sesame Oil', quantity: '1 bottle (500 ml)', price: '$6.95', image: 'https://cdn.usegalileo.ai/sdxl10/716a5386-7048-447f-8b58-32ee886519ca.png' },
      { name: 'Sunflower Oil', quantity: '1 bottle (500 ml)', price: '$4.95', image: 'https://cdn.usegalileo.ai/stability/0828477b-e6be-402c-8aa8-bec6bb8e6cc4.png' },
      { name: 'Coconut Oil', quantity: '1 bottle (500 ml)', price: '$5.95', image: 'https://cdn.usegalileo.ai/stability/573d6214-d45f-4a7f-aa1f-4a3c906f8f25.png' },
    ],
  },
  {
    name: 'Milk',
    items: [
      { name: 'Almond Milk', quantity: '1 bottle (1 liter)', price: '$3.95', image: 'https://cdn.usegalileo.ai/stability/6563504b-9eb8-4a81-a96e-135aac2a13fd.png' },
      { name: 'Soy Milk', quantity: '1 bottle (1 liter)', price: '$2.95', image: 'https://cdn.usegalileo.ai/stability/a5a81b24-8bb0-4dae-8049-bc9f86161abb.png' },
      { name: 'Coconut Milk', quantity: '1 bottle (1 liter)', price: '$4.95', image: 'https://cdn.usegalileo.ai/stability/251a6c57-07e7-4339-8389-1df6ef19bbbe.png' },
    ],
  },
  {
    name: 'Spices',
    items: [
      { name: 'Ground Cumin', quantity: '1 jar (100 g)', price: '$2.95', image: 'https://images.unsplash.com/photo-1554345795-1243a276630e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTI0NDl8MHwxfHNlYXJjaHwzfHxzcGljZXxlbnwxfHx8fDE3Mjk1Mjk1MTl8MA&ixlib=rb-4.0.3&q=80&w=1080' },
      { name: 'Ground Coriander', quantity: '1 jar (100 g)', price: '$2.95', image: 'https://cdn.usegalileo.ai/sdxl10/fd317c2f-21c9-45e7-962d-874843dcbcb9.png' },
      { name: 'Garam Masala', quantity: '1 jar (100 g)', price: '$3.95', image: 'https://cdn.usegalileo.ai/stability/5cc5e835-7829-436e-ad0c-28e67986eb28.png' },
    ],
  },
  {
    name: 'Pulses',
    items: [
      { name: 'Red Lentils', quantity: '1 bag (500 g)', price: '$2.95', image: 'https://cdn.usegalileo.ai/sdxl10/7c466425-6333-4aa9-a5a0-d8d747671739.png' },
      { name: 'Chickpeas', quantity: '1 bag (500 g)', price: '$2.95', image: 'https://cdn.usegalileo.ai/stability/ebc6c311-aec9-4a03-8650-d1f3fa95a090.png' },
      { name: 'Black Beans', quantity: '1 bag (500 g)', price: '$2.95', image: 'https://cdn.usegalileo.ai/stability/525c9961-d85b-4f8c-9961-316a08c7d638.png' },
    ],
  },
  {
    name: 'Grains',
    items: [
      { name: 'Basmati Rice', quantity: '1 bag (500 g)', price: '$3.95', image: 'https://cdn.usegalileo.ai/stability/073c0d10-5517-4899-a59b-3f83637cf556.png' },
      { name: 'Quinoa', quantity: '1 bag (500 g)', price: '$4.95', image: 'https://cdn.usegalileo.ai/stability/699fed8a-d39a-4dce-96f6-beb5cdd87101.png' },
      { name: 'Polenta', quantity: '1 bag (500 g)', price: '$3.95', image: 'https://cdn.usegalileo.ai/sdxl10/b4c34890-8c8c-4ca0-8334-e9e4f1b7e034.png' },
    ],
  },
]

export default function Ingredient() {
  return (
    <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap gap-2 p-4">
          <Link href="#" className="text-[#897361] text-base font-medium leading-normal">
            Home
          </Link>
          <span className="text-[#897361] text-base font-medium leading-normal">/</span>
          <span className="text-[#181411] text-base font-medium leading-normal">Ingredients</span>
        </div>
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <h1 className="text-[#181411] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
            Ingredients
          </h1>
        </div>
        {ingredientCategories.map((category) => (
          <div key={category.name}>
            <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              {category.name}
            </h2>
            {category.items.map((item) => (
              <div key={item.name} className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14">
                    <Image src={item.image} alt={item.name} width={56} height={56} className="rounded-lg" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[#181411] text-base font-medium leading-normal line-clamp-1">{item.name}</p>
                    <p className="text-[#897361] text-sm font-normal leading-normal line-clamp-2">{item.quantity}</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f4f2f0] text-[#181411] text-sm font-medium leading-normal w-fit">
                    <span className="truncate">{item.price}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}