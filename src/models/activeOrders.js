const activeOrders = [
  {
    id: 1,
    guests: 2,
    subtotal: 52.95,
    seats: [
      {
        id: '1',
        items: [
          {
            item: 'Bud Light 12oz Draft',
            displayName: 'Bud Lt Draft',
            quantity: 2,
            price: 3.99,
          },
          {
            item: 'Water',
            displayName: 'Water',
            quantity: 1,
            price: 0.0,
          },
          {
            item: 'Pork Chop 8oz',
            displayName: 'Pork Chop',
            quantity: 1,
            price: 16.99,
            instructions: ['Medium-well', 'Extra potatoes'],
          },
        ],
      },
      {
        id: '2',
        items: [
          {
            item: 'Chateau Ste. Michelle Cabernet Sauvignon 2017 6oz',
            displayName: 'Ste. Michelle 6oz',
            quantity: 1,
            price: 8.99,
          },
          {
            item: 'Alaskan Salmon Filet 7oz',
            displayName: 'Salmon',
            quantity: 1,
            price: 18.99,
            instructions: ['Medium', 'No skin', 'Light sauce'],
          },
        ],
      },
    ],
  },
];

export default activeOrders;
