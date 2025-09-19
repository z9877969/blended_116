import { Schema, model } from 'mongoose';

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['books', 'electronics', 'clothing', 'other'],
      default: 'other',
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKeys: false,
  },
);

export const ProductsCollection = model('products', productsSchema);
