import ProductModel from '../models/product-model.js'
import CategoryModel from '../models/category-model.js'

export const createCategory = async (data) => {
  const category = await CategoryModel.create(data)

  return category
}

export const updateCategories = async (categoriesValue, productId) => {
  const categories = await CategoryModel.find()

  for (const category of categories) {
    category.products = category.products
      .map((id) => id.toString())
      .filter((id) => id !== productId.toString())
    await category.save()

    categoriesValue.forEach(async (value) => {
      if (value === category._id.toString()) {
        category.products = [...category.products, productId]
        await category.save()
      }
    })
  }
  return categories
}

export const deleteCategory = async (catId) => {
  const category = await CategoryModel.findById(catId)

  const { products } = category

  if (products.length > 0) {
    products.forEach(async (id) => {
      const product = await ProductModel.findById(id)
      product.categories = product.categories
        .map((id) => id.toString())
        .filter((el) => el !== catId)
      await product.save()
    })
  }

  await category.delete()

  return category
}

export const updateCategory = async (catId, value) => {
  const category = await CategoryModel.findByIdAndUpdate(
    catId,
    { value },
    { returnDocument: 'after' },
  )

  return category
}

export const getCategory = async (catId) => {
  const category = await CategoryModel.findById(catId).populate('products').exec()

  return category
}

export const getCategories = async () => {
  const category = await CategoryModel.find()

  return category
}
