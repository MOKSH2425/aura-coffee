// sanity/schemas/menuItem.js
export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Item Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Espresso Core', value: 'espresso' },
          { title: 'Signature Drinks', value: 'signature' },
          { title: 'Manual Brews', value: 'manual' },
          { title: 'Fresh Bakes', value: 'bakes' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price (₹)',
      type: 'number',
      validation: Rule => Rule.required().positive()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description of the ingredients or flavor profile'
    },
    {
      name: 'isPopular',
      title: 'Popular/Featured?',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'tags',
      title: 'Tags (e.g. New, Vegan)',
      type: 'array',
      of: [{type: 'string'}]
    }
  ],
};
