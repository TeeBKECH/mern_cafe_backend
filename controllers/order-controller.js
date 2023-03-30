import * as orderService from '../services/order-service.js'

export const createOrder = async (req, res, next) => {
  try {
    const { order } = req.body
    const { id } = req.user
    const orderData = await orderService.createOrder(order, id)
    return res.json(orderData)
  } catch (error) {
    next(error)
  }
}

export const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params
    const orderData = await orderService.deleteOrder(id)
    return res.json(orderData)
  } catch (error) {
    next(error)
  }
}

export const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params
    const { status } = req.body
    const orderData = await orderService.updateOrder(id, status)
    return res.json(orderData)
  } catch (error) {
    next(error)
  }
}

export const getOrder = async (req, res, next) => {
  try {
    const { id } = req.params
    const { user } = req
    const orderData = await orderService.getOrder(id, user)
    return res.json(orderData)
  } catch (error) {
    next(error)
  }
}

export const getOrders = async (req, res, next) => {
  try {
    const orderData = await orderService.getOrders()
    return res.json(orderData)
  } catch (error) {
    next(error)
  }
}
