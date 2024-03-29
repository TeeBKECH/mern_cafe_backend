import mongoose from 'mongoose'

import ProductModel from '../models/product-model.js'

import * as categoryService from './category-service.js'
import { ApiError } from '../utils/api-error.js'

export const createProduct = async (data, id) => {
  let { categories } = data

  if (!categories || categories.length === 0) {
    categories = ['63d3df74c7ecd7fb5b40ad18']
  }
  const product = await ProductModel.create({ ...data, categories, user: id })

  await categoryService.updateCategories(categories, product._id)

  return product
}

export const updateProduct = async (id, data) => {
  let { categories } = data

  if (!categories || categories.length === 0) {
    categories = ['63d3df74c7ecd7fb5b40ad18']
  }
  const product = await ProductModel.findOneAndUpdate(
    { _id: id },
    { $set: { ...data, categories } },
    { returnDocument: 'after' },
  )

  await categoryService.updateCategories(categories, product._id)

  return product
}

export const deleteProduct = async (id) => {
  const product = await ProductModel.findByIdAndDelete(id)

  await categoryService.updateCategories([], product._id)

  return product
}

export const getProduct = async (id) => {
  const objId = mongoose.Types.ObjectId(id)
  const product = await ProductModel.findOne({ _id: objId })
    .populate('tags')
    .populate('categories')
    .exec()

  if (!product) {
    throw ApiError.NotFoundError(`Продукт не найден`)
  }

  return product
}

export const getProducts = async () => {
  const products = await ProductModel.find().populate('tags').populate('categories').exec()

  if (products.length === 0) {
    throw ApiError.NotFoundError(`Продукты не найдены`)
  }

  return products
}
