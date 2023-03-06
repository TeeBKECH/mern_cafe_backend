import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, length: { min: 5, max: 20 } },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    address: {
      country: { type: String, default: '' },
      state: { type: String, default: '' },
      city: { type: String, default: '' },
      street: { type: String, default: '' },
      house: { type: String, default: '' },
      apartments: { type: String, default: '' },
    },
    phoneNumber: { type: String, default: '' },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
    roles: [
      {
        type: String,
        ref: 'Role',
      },
    ],
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cart',
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
      },
    ],
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('User', UserSchema)
