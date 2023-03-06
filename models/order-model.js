import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
  {
    totalPrice: {
      type: Number,
    },
    status: {
      type: String,
      default: 'Заказ создан',
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
        _id: false,
        id: false,
      },
    ],
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Order', OrderSchema)
