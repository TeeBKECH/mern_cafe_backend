import * as tagService from '../services/tag-service.js'

export const createTag = async (req, res, next) => {
  try {
    const { value, products } = req.body
    const tagData = await tagService.createTag({ value, products })
    return res.json(tagData)
  } catch (error) {
    next(error)
  }
}
