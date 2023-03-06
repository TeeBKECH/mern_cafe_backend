import mongoose from 'mongoose'

const TagSchema = new mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
      unique: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('Tag', TagSchema)
