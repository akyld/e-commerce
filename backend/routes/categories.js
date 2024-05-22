const express = require('express')
const router = express.Router()

// Tüm kategorileri getirme (Read - All)

router.get('/', (req, res) => {
  res.send('Get all categories')
})

module.exports = router
