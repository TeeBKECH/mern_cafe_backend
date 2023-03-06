import * as categoryService from '../services/category-service.js'

export const createCategory = async (req, res, next) => {
  try {
    const { value, products } = req.body
    const categoryData = await categoryService.createCategory({ value, products })
    return res.json(categoryData)
  } catch (error) {
    next(error)
  }
}

export const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params
    const categoryData = await categoryService.deleteCategory(id)
    return res.json(categoryData)
  } catch (error) {
    next(error)
  }
}

export const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params
    const { value } = req.body
    const categoryData = await categoryService.updateCategory(id, value)
    return res.json(categoryData)
  } catch (error) {
    next(error)
  }
}

export const getCategory = async (req, res, next) => {
  try {
    const { id } = req.params
    const categoryData = await categoryService.getCategory(id)
    return res.json(categoryData)
  } catch (error) {
    next(error)
  }
}

export const getCategories = async (req, res, next) => {
  try {
    const categoryData = await categoryService.getCategories()
    return res.json(categoryData)
  } catch (error) {
    next(error)
  }
}
