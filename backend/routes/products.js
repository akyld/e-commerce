const express = require('express')
const router = express.Router()

// Tüm ürünleri getirme (Read - All)

router.get('/', (req, res) => {
  res.send('Get all products')
})

module.exports = router
