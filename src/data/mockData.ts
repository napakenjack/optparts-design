export type Product = {
  id: string;
  title: string;
  article: string;
  brand: string;
  minPrice: number;
  delivery: string;
  image: string;
};

export const popularQueries = ['Brake pads', 'Oil filter 90915', 'Spark plugs NGK', 'Timing belt kit'];

export const products: Product[] = [
  {
    id: '1',
    title: 'Front Brake Pad Set Premium Ceramic',
    article: 'BP-4471',
    brand: 'Ferodo',
    minPrice: 49.9,
    delivery: 'Same day',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '2',
    title: 'Oil Filter Spin-On High Flow',
    article: 'OF-90915',
    brand: 'Mann',
    minPrice: 12.5,
    delivery: '1-2 days',
    image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=800&q=60'
  },
  {
    id: '3',
    title: 'Wheel Bearing Kit Front Axle',
    article: 'WB-2208',
    brand: 'SKF',
    minPrice: 79,
    delivery: '2-4 days',
    image: 'https://images.unsplash.com/photo-1613214150388-878d75f86df1?auto=format&fit=crop&w=800&q=60'
  }
];

export const supplierOffers = [
  { supplier: 'AutoHub East', price: 49.9, stock: 12, delivery: 'Same day', city: 'Dallas', recommended: true },
  { supplier: 'FastParts', price: 52.2, stock: 34, delivery: '1 day', city: 'Austin', recommended: false },
  { supplier: 'MotorStock Pro', price: 48.5, stock: 0, delivery: '3 days', city: 'Houston', recommended: false }
];

export const orderStatuses = ['Pending payment', 'Confirmed', 'Picking', 'Shipped', 'Delivered'];
