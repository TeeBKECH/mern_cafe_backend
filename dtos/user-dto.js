export class UserDto {
  id
  email
  roles
  cart

  constructor(model) {
    this.id = model._id
    this.email = model.email
    this.roles = model.roles
    this.cart = model.cart
  }
}
