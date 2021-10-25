const { Router } = require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.send('Ruta Principal (Home)')
})


module.exports = router;