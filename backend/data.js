import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      
      name: 'Whey isolate',
      category: 'whey ',
      image: '/images/p1.jpg',
      price: 240,countInStock: 15,
      brand: 'Olymp',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'Creatine monohydrate',
      category: 'creatine',
      image: '/images/p2.jpg',
     price: 150, countInStock: 0,
      brand: 'ON',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'L-CARNITINE',
      category: 'fat burner',
      image: '/images/p3.jpg',
      price: 220,countInStock: 10,
      brand: 'ON',
      rating: 3,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      
      name: 'Mass gainer',
      category: 'mass',
      image: '/images/p4.jpg',
      price: 78,countInStock: 25,
      brand: 'ON',
      rating: 2.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      
      name: 'Lipo 6',
      category: 'fat burner',
      image: '/images/p5.jpg',
      price: 65,countInStock: 45,
      brand: 'Nutrex',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'Citruline',
      category: 'supplement',
      image: '/images/p6.jpg',
      price: 139,countInStock: 5,
      brand: 'OstroVit',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;