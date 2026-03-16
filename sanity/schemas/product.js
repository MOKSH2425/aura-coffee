// schemas/product.js
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: [
            { title: 'Coffee Beans', value: 'beans' },
            { title: 'Apparel', value: 'apparel' },
            { title: 'Brewing Gear', value: 'gear' }
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'roastLevel',
        title: 'Roast Level',
        type: 'string',
        options: {
          list: [
            { title: 'Light Roast', value: 'light' },
            { title: 'Medium Roast', value: 'medium' },
            { title: 'Dark Roast', value: 'dark' },
            { title: 'N/A (Not Coffee)', value: 'none' }
          ]
        }
      },
      {
        name: 'image',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true, // Allows crop zooming in the CMS
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
        name: 'shortDescription',
        title: 'Short Description',
        type: 'string',
        description: 'E.g., "Chikmagalur • Chocolate & Roasted Almond"'
      },
      {
        name: 'rating',
        title: 'Customer Rating',
        type: 'number',
        validation: Rule => Rule.min(1).max(5)
      }
    ],
  };
