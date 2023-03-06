import TagModel from '../models/tag-model.js'

export const createTag = async (data) => {
  const tag = await TagModel.create(data)

  return {
    ...tag,
  }
}
