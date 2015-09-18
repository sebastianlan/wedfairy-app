var CONFIG = {
    ENV : 'production',

    TAT_STATIC : 'http://static.wedfairy.com/',
    VU_API_ROOT :'http://api.wedfairy.com/api/users/user/',

    COMPOSER_HOST : 'http://192.168.0.169:3000/',

    API_ROOT : 'http://192.168.0.169:8000/api/',
    API_HOST : 'http://192.168.0.169:8000/api/',
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
