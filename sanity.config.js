import { defineConfig } from 'sanity';
import product from './sanity/schemas/product';
import menuItem from './sanity/schemas/menuItem';
import location from './sanity/schemas/location';

import { structureTool } from 'sanity/structure';

export default defineConfig({
  name: 'default',
  title: 'Aura Coffee CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,

  basePath: '/admin',

  plugins: [structureTool()],

  schema: {
    types: [product, menuItem, location],
  },
});
