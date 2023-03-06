import mongoose from 'mongoose'

const CartSchema = new mongoose.Schema(
  {
    totalPrice: {
      type: Number,
      default: 0,
    },
    totalCount: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    products: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        count: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Cart', CartSchema)
