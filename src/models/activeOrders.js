const activeOrders = [
  {
    host: '46j4b6j47j254j2',
    id: '356jkb9nc29tn7b',
    tableNumber: 1,
    guests: 2,
    subtotal: 52.95,
    seats: [
      {
        seatNumber: 0,
        items: [
          {
            name: 'Table appetizer',
            quantity: 1,
            price: 5.99,
          },
        ],
      },
      {
        seatNumber: 1,
        items: [
          {
            name: 'Pizza',
            quantity: 1,
            price: 5.99,
          },
          {
            name: 'Beer',
            quantity: 1,
            price: 5.99,
          },
        ],
      },
    ],
  },
];

// seats: {
//   '0': [],
//   '1': [
//     {
//       item: '',
//       quantity: 2,
//     },
//     {
//       item: '',
//       quantity: 1,
//       instructions: ['Medium-well', 'Extra potatoes'],
//     },
//   ],
//   '2': [
//     {
//       item: '',
//       quantity: 1,
//       instructions: ['Medium', 'No skin', 'Light sauce'],
//     },
//   ],
// },

export default activeOrders;
