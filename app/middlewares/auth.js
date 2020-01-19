const jwt = require('../helpers/jwtToken');
const cache = require('../cache');

async function authMiddleware(req, res, next) {
    try {
        if(!req.cookies.access_token) {
            return res.status(401).send();
        }
        const token = req.cookies.access_token.split(' ')[1];
        const data = await jwt.verify(token);
        const cachedToken = await cache.getVkToken(data.vkId);
        if(cachedToken === data.vkAccessToken){
            req.userData = data;
            return next();
        }else{
            req.clearCookie('access_token');
            res.status(401).send();
        }
    }catch(e){
        console.error(e);
        res.status(401).send();
    }
}
module.exports = authMiddleware;