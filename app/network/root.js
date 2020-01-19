const path = require('path');
const router = require('express').Router();
const authMiddleware = require('../middlewares/auth');


router.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'../../dist/index.html'))
});
router.get('/:path', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../../dist', req.params.path))
});

module.exports = router;