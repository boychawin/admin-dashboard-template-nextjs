export type Item = {
    name: string;
    slug: string;
    description?: string;
  };
  
  export const menus: { name: string; items: Item[] }[] = [
    {
      name: 'Menu 1: Food',
      items: [
        {
          name: 'Pad Thai',
          slug: '/',
          description: 'Thin rice noodles mixed with spices and fresh vegetables, served with bean sprouts and fresh mango slices.',
        }
      ],
    },
    {
      name: 'Menu 2: Beverages',
      items: [
        {
          name: 'Green Tea',
          slug: 'green-tea',
          description:
            'Hot or cold green tea, sweetened with honey to taste.',
        }
      ],
    }
  ];
  
  