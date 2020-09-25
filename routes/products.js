const { Router } = require('express')
const controllers = require('../controllers/products')

const router = Router()

router.get('/products', controllers.getProducts)
router.get('/products/:id', controllers.getProduct)
router.post('/add', controllers.createProduct)
router.put('/products/edit/:id', controllers.updateProduct)
router.delete('/products/:id', controllers.deleteProduct)

module.exports = router