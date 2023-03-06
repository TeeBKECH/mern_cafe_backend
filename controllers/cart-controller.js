import * as cartService from '../services/cart-service.js'

export const updateCart = async (req, res, next) => {
  try {
    const { data } = req.body
    const { id } = req.params
    const cartData = await cartService.updateCart(id, data)
    return res.json(cartData)
  } catch (error) {
    next(error)
  }
}

export const deleteCart = async (req, res, next) => {
  try {
    const { id } = req.params
    const cartData = await cartService.deleteCart(id)
    return res.json(cartData)
  } catch (error) {
    next(error)
  }
}

export const getCart = async (req, res, next) => {
  try {
    const { id } = req.params
    const cartData = await cartService.getCart(id)
    return res.json(cartData)
  } catch (error) {
    next(error)
  }
}

export const getCarts = async (req, res, next) => {
  try {
    const cartData = await cartService.getCarts()
    return res.json(cartData)
  } catch (error) {
    next(error)
  }
}
