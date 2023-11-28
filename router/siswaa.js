const express = require('express')
const router = express.Router()

const siswacontroller = require('../controllers/siswa')

router.get('/siswa', siswacontroller.index)

router.get('/siswa/:id', siswacontroller.show)
   router.post('/siswa', siswacontroller.store)
   router.put('/siswa/:id', siswacontroller.update )
   router.delete('/siswa/:id', siswacontroller.delete)
  
   module.exports = router
