module.exports = {
    // Production config - this overrides the default config
    // when NODE_ENV=production

    // Server Config
    server: {
        port: 8000, // Server port number
        host: '0.0.0.0', // Server host
    },
    db: {
        url: 'mongodb://localhost:27017/notes',
    },
};
