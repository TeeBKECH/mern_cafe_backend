import OrderModel from '../models/order-model.js'
import * as telegramService from './telegram-service.js'

export const createOrder = async (order, userId) => {
  const orderData = await OrderModel.create(order)

  const status = await telegramService.sendMessage(orderData._id)

  return status
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
