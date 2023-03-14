import { Router } from 'express'

import roleMiddleware from '../middleware/role-middleware.js'
import authMiddleware from '../middleware/auth-middleware.js'

import * as productController from '../controllers/product-controller.js'
import * as categoryController from '../controllers/category-controller.js'
import * as orderController from '../controllers/order-controller.js'
import * as tagController from '../controllers/tag-controller.js'
import * as roleController from '../controllers/role-controller.js'
import * as cartController from '../controllers/cart-controller.js'

const router = new Router()

// ============================================================
// API Для Получения, добавления, обновления и удаления продукта
router.post(
  '/products',
  roleMiddleware(['SUPER_ADMIN', 'ADMIN', 'MANAGER']),
  productController.createProduct,
)
router.patch(
  '/products/:id',
  roleMiddleware(['SUPER_ADMIN', 'ADMIN', 'MANAGER']),
  productController.updateProduct,
)
router.delete(
  '/products/:id',
  roleMiddleware(['SUPER_ADMIN', 'ADMIN', 'MANAGER']),
  productController.deleteProduct,
)
router.get('/products/:id', productController.getProduct)
router.get('/products', productController.getProducts)

// ============================================================
// API для Получения, добавления, обновления и удаления категорий продукта
router.post(
  '/category',
  roleMiddleware(['SUPER_ADMIN', 'ADMIN', 'MANAGER']),
  categoryController.createCategory,
)
router.delete(
  '/category/:id',
  roleMiddleware(['SUPER_ADMIN', 'ADMIN', 'MANAGER']),
  categoryController.deleteCategory,
)
router.patch(
  '/category/:id',
  roleMiddleware(['SUPER_ADMIN', 'ADMIN', 'MANAGER']),
  categoryController.updateCategory,
)
router.get('/category/:id', categoryController.getCategory)
router.get('/category', categoryController.getCategories)

// ============================================================
// API для Получения, добавления, обновления и удаления заказов
router.post('/order', authMiddleware, orderController.createOrder)
router.delete('/order/:id', authMiddleware, orderController.deleteOrder)
router.patch('/order/:id', authMiddleware, orderController.updateOrder)
router.get('/order/:id', authMiddleware, orderController.getOrder)
router.get('/order', authMiddleware, orderController.getOrders)

// ============================================================
// API для Получения, добавления, обновления и удаления заказов
router.delete('/cart/:id', roleMiddleware(['SUPER_ADMIN']), cartController.deleteCart)
router.patch('/cart/:id', authMiddleware, cartController.updateCart)
router.get('/cart/:id', authMiddleware, cartController.getCart)
router.get('/cart', roleMiddleware(['SUPER_ADMIN', 'ADMIN', 'MANAGER']), cartController.getCarts)

// ============================================================
// API для Получения, добавления, обновления и удаления тегов
router.post('/tag', roleMiddleware(['SUPER_ADMIN', 'ADMIN', 'MANAGER']), tagController.createTag)

// ============================================================
// API для управления ролями пользователя
router.post('/role', roleMiddleware(['SUPER_ADMIN']), roleController.createRole)

export default router
