// sanity/schemas/location.js
export default {
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'E.g. Aura Roastery, Koramangala',
      validation: Rule => Rule.required()
    },
    {
      name: 'address',
      title: 'Address Line 1',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'neighborhood',
      title: 'Neighborhood / Area',
      type: 'string',
      description: 'E.g. Indiranagar, Bandra West'
    },
    {
      name: 'image',
      title: 'Location Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'hours',
      title: 'Operating Hours',
      type: 'string',
      description: 'E.g. Mon-Sun: 8AM - 11PM'
    },
    {
      name: 'phone',
      title: 'Contact Number',
      type: 'string'
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          { title: 'Free Wi-Fi', value: 'wifi' },
          { title: 'Outdoor Seating', value: 'outdoor' },
          { title: 'Roastery Tour', value: 'roastery' },
          { title: 'Pet Friendly', value: 'pets' },
          { title: 'Bakery', value: 'bakery' }
        ]
      }
    }
  ],
};
