// schemas/product.js
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Product Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',                                                                                    
      },
      {
        name: 'stock',
        title: 'Stock Quantity',
        type: 'number',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        options: {
          list: ['DIY Kit', 'Handmade Craft'],
        },                                                                                      
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'artisan',
        title: 'Artisan',
        type: 'reference',
        to: [{ type: 'artisan' }],
      },
      {
        name: 'images',
        title: 'Product Images',
        type: 'array',
        of: [{ type: 'image' }],
      },
      {
        name: 'customizable',
        title: 'Customizable',
        type: 'boolean',
      },
    ],
  };
  
  