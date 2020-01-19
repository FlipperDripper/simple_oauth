module.exports = {
    host: 'localhost',
    port: 9090,
    redis:{
        host: 'localhost',
        'port': 6379,
        
    },
    vk:{
        redirectUrl: 'http://localhost:9009/api/auth/vk/callback',
        client_id:'6112437',
        client_secret: 'y7ArbBWD1I2LOcVDjrRH',
        vkOAuthLink: 'https://oauth.vk.com/authorize',
        vkAccessTokenLink: 'https://oauth.vk.com/access_token',
        api:{
            url: 'https://api.vk.com/method',
            methods:{
                friends: 'friends.get'
            },
            version:'5.103'
        }
    },
    jwtSecret: 'some secret code'
};