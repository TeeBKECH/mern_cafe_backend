export class ProductDto {
  title
  price
  id

  constructor(model) {
    this.title = model.title
    this.id = model._id
    this.price = model.price
  }
}
