var CONFIG = {
    ENV : 'production',

    TAT_STATIC : 'http://static.wedfairy.com/',
    VU_API_ROOT :'http://192.168.0.200:8000/api/appstore/authorize/',

    COMPOSER_HOST : 'http://localhost:3000/',

    API_ROOT : 'http://localhost:8000/',
    API_HOST : 'http://localhost:8000/',
    API_HOSTNAME : 'api.wedfairy.com',
    API_PORT : 8000,
    API_PROTOCOL : 'http',

    CDN_URL : '/public/',

    WECHAT: {
        APPID: '',
        APPSECRET: ''
    }
};

try {
    var CONFIG_LOCAL = require('./settings_local');
    for (var prop in CONFIG_LOCAL) {
        CONFIG[prop] = CONFIG_LOCAL[prop];
    }
} catch (e) {}

module.exports = CONFIG;
