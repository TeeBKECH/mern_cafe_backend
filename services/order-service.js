import OrderModel from '../models/order-model.js'

export const createOrder = async (cart, userId) => {
  const order = await OrderModel.create({
    totalPrice: cart.totalPrice,
    user: userId,
    products: cart.products,
  })

  return order
}

export const deleteOrder = async (orderId) => {
  const order = await OrderModel.findByIdAndDelete(orderId)

  return order
}

export const updateOrder = async (status, orderId) => {
  const order = await OrderModel.findByIdAndUpdate({ orderId }, { status })

  return order
}

export const getOrder = async (orderId) => {
  const order = await OrderModel.findById(orderId).populate('products').exec()

  return order
}

export const getOrders = async () => {
  const orders = await OrderModel.find()

  return orders
}
