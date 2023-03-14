import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
  {
    totalPrice: {
      type: Number,
    },
    type: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    address: {
      type: String,
    },
    time: {
      type: String,
    },
    message: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
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
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        title: {
          type: String,
        },
        count: {
          type: Number,
        },
        _id: false,
      },
    ],
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Order', OrderSchema)
