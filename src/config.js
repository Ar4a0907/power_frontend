let config = {
    baseUrl: 'http://127.0.0.1:5000', //MEMO: michael: local
    accessTokenName: 'access_token',
    userRoles: {
        'guest': 0,
        'admin': 1,
        'super_admin': 2
    },
    supportedLangs: ['lv', 'en', 'ru']
};

export default Object.freeze(Object.assign({}, config));