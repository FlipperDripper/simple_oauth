module.exports = {
    host: 'localhost',
    port: 9090,
    redis:{
        host: 'localhost',
        'port': 6379,
        
    },
    vk:{
        redirectUrl: 'http://localhost:9090/auth/vk/callback',
        client_id:'6112437',
        client_secret: 'y7ArbBWD1I2LOcVDjrRH',
        vkOAuthLink: 'https://oauth.vk.com/authorize',
        vkAccessTokenLink: 'https://oauth.vk.com/access_token',
    },
    jwtSecret: 'some secret code'
};