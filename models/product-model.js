import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    shortDescription: String,

    image: String,
    price: {
      type: Number,
      required: true,
    },
    show: {
      type: Boolean,
      default: true,
    },
    deliveryAvailable: {
      type: Boolean,
      default: false,
    },
    popular: {
      type: Boolean,
      default: false,
    },
    popularImg: {
      type: String,
    },
    info: {
      sku: {
        type: Number,
        unique: true,
      },
      pfc: {
        proteins: { type: Number, default: 0 },
        fats: { type: Number, default: 0 },
        carbohydrates: { type: Number, default: 0 },
      },
      weight: {
        value: {
          type: Number,
          default: 0,
        },
      },
      height: {
        value: {
          type: Number,
          default: 0,
        },
      },
      width: {
        value: {
          type: Number,
          default: 0,
        },
      },
      length: {
        value: {
          type: Number,
          default: 0,
        },
      },
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
      },
    ],

    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
      },
    ],
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Product', ProductSchema)
