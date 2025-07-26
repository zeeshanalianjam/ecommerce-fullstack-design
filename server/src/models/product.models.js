import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      currentPrice: {
        type: Number,
        required: true,
      },
      originalPrice: {
        type: Number,
        required: true,
      },
      priceNegotiable: {
        type: Boolean,
        default: false,
      },
    },
    type: {
      type: String,
      enum: [
        'Electronics',
        'Fashion',
        'Home',
        'Kitchen',
        'Sports',
        'Beauty',
        'Plastic Material',
      ],
      required: true,
      default: 'Plastic Material',
    },
    design: {
      type: String,
      required: true,
      enum: ['Modern Nice', 'Old Fashion', 'Vintage'],
      default: 'Modern Nice',
    },
    customization: {
      type: String,
      required: true,
      enum: [
        'Customized logo and design custom packages',
        'Customized logo and design custom packages',
        'Customized logo and design custom packages',
      ],
      default: 'Customized logo and design custom packages',
    },
    protection: {
      type: String,
      required: true,
      default: 'Refund Policy',
    },
    warranty: {
      type: String,
      required: true,
      default: '2 years full warranty',
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      required: true,
    },
    features: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Feature',
      required: true,
    },
    image: {
      type: Array,
      default: [],
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    ratings: {
      type: Number,
      min: 0,
      max: 5,
      default: 3.5,
    },
    orders: {
      type: Number,
      default: 0,
    },
    shipping: {
      type: String,
      default: 'Free shipping',
    },
    reviews: {
      type: Array,
      default: [],
    },
    sold: {
      type: Number,
      default: 100,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model('Product', productSchema);
