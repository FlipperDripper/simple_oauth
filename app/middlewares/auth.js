const jwt = require('../helpers/jwtToken');
const cache = require('../cache');

async function authMiddleware(req, res, next) {
    try {
        const token = req.cookies.access_token.split(' ')[1];
        const data = await jwt.verify(token);
        const cachedToken = await cache.getVkToken(data.vkId);
        if(cachedToken === data.vkAccessToken) return next();
        res.redirect(301, '/auth');
    }catch(e){
        console.error(e);
        res.redirect(301, '/auth');
    }
}
module.exports = authMiddleware;