const config = require('../config');
const router = require('express').Router();
const VkApiConstructor = require('../helpers/vkApiContstructor');
const authMiddleware = require('../middlewares/auth');
const axios = require('axios');
const controller = require('../controllers')
router.use(authMiddleware);
router.get('/get', async (req, res)=>{
    const count = req.query.count || 5;
    const {vkId, vkAccessToken} = req.userData;
    const friends = await controller.friends.getFriends(vkId, vkAccessToken, count);
    res.status(200).send(friends);
});


module.exports = router;