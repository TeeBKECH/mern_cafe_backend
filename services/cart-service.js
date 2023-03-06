import CartModel from '../models/cart-model.js'
import ProductModel from '../models/product-model.js'
import { ApiError } from '../utils/api-error.js'

export const generateCart = async (userId, cartData) => {
  const data = await CartModel.findOne({ user: userId })
  if (data) {
    throw ApiError.BadRequestError('Для данного пользователя корзина уже существует')
  }

  let totalPrice = 0
  let totalCount = 0

  if (cartData.length > 0) {
    const dbProducts = await ProductModel.find({
      _id: {
        $in: cartData.map((el) => el.item),
      },
    })

    totalPrice = dbProducts.reduce((sum, acc) => {
      const price = acc.price
      const el = cartData.find((el) => el.item === acc._id.toString())
      return price * el.count + sum
    }, 0)
    totalCount = cartData.reduce((sum, acc) => {
      return acc.count + sum
    }, 0)
  }

  const cart = await CartModel.create({
    totalPrice,
    totalCount,
    user: userId,
    products: cartData,
  })
  return cart
}

export const deleteCart = async (userId) => {
  const data = await CartModel.findOneAndDelete({ user: userId })
  return data
}
