module.exports = {
    // Configs must be categorized and sorted in alphabetical order
    // Have proper comments explaining each category and key

    crypt: {
        salt_rounds: 10,
        jwt_secret: 'this_is_jwt_secret',
        token_expiry_period: 86400,
    },
    // Database Config
    db: {
        url: 'mongodb://localhost:27017/notes',
    },
    // Logging Config
    logs: {
        logging_level: 'info',
        serviceName: 'defaultServiceName',
        // "logglyToken": "",
        // "logglySubdomain": ""
    },
    // Mailing Config
    mail: {
        enabled: false,
        sendgrid_key: '',
        from_address: 'no-reply@delta.nitt.edu',
    },
    // Server Config
    server: {
        port: 8000, // Server port number
        proxy: '', // in case of proxy eg - /myapp
        domain: 'http://localhost:8000', // Server domain
    },
};
