import * as productService from '../services/product-service.js'

export const createProduct = async (req, res, next) => {
  try {
    const { data } = req.body
    const { user } = req
    const productData = await productService.createProduct(data, user.id)
    return res.json(productData)
  } catch (error) {
    next(error)
  }
}

export const updateProduct = async (req, res, next) => {
  try {
    const { data } = req.body
    const { id } = req.params
    const productData = await productService.updateProduct(id, data)
    return res.json(productData)
  } catch (error) {
    next(error)
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const productData = await productService.deleteProduct(id)
    return res.json(productData)
  } catch (error) {
    next(error)
  }
}

export const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const productData = await productService.getProduct(id)
    return res.json(productData)
  } catch (error) {
    next(error)
  }
}

export const getProducts = async (req, res, next) => {
  try {
    const productData = await productService.getProducts()
    return res.json(productData)
  } catch (error) {
    next(error)
  }
}
