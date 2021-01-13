import bcrypt from 'bcryptjs';

const data ={
    users: [
      {
        name: 'Victor',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
      },
      {
        name: 'Albert',
        email: 'user@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false,
      },
    ],
    products:[
        {
            _id: '1',
            name: 'Conor WRC 2020',
            category: 'MTB Bike',
            image: '/images/p1.jpg',
            price: 350,
            countInStock: 10,
            brand: 'Conor',
            rating: 3.5,
            numReviews: 10,
            description: 'high quality product',
          },
        {
            _id: '2',
            name: 'Felt Doctrine 2020',
            category: 'MTB Bike',
            image: '/images/p2.jpg',
            price: 2999,
            countInStock: 20,
            brand: 'Felt',
            rating: 4.5,
            numReviews: 17,
            description: 'high quality product',
          },
        {
            _id: '3',
            name: 'Merida Big Nine 2020',
            category: 'MTB Bike',
            image: '/images/p3.jpg',
            price: 1475,
            countInStock: 0,
            brand: 'merida',
            rating: 4,
            numReviews: 24,
            description: 'high quality product',
          },
        {
            _id: '4',
            name: 'Scott Scale',
            category: 'MTB Bike',
            image: '/images/p4.jpg',
            price: 2875,
            countInStock: 5,
            brand: 'Scott',
            rating: 5,
            numReviews: 8,
            description: 'high quality product',
          },
    ]
}

export default data;