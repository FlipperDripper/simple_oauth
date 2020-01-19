const path = require('path');
const controllers = require('../controllers');
const constants = require('../constants');
const router = require('express').Router();

const getOpenIdRedirectUrl = require('../helpers/getOpenIdRedirectLink');

router.post('/logut', (req, res)=>{
    res.clearCookie('access_token');
    res.status(200).send();
})

router.post('/vk', (req, res)=>{
    res.status(200).send({
        redirectUrl: getOpenIdRedirectUrl(constants.OPEN_ID_SERVICES.VK)
    })
});

router.get('/vk/callback', async (req, res)=>{
    const {code} = req.query;
    const {accessToken, expires} = await controllers.auth.authUserByVkCode(code);
    res.cookie('access_token',  'Bearer ' + accessToken, {expires})
        .redirect(301, '/');
});

module.exports = router;