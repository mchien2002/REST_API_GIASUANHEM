const redis = require('redis');

const { promisify } = require('util');

const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379,
});
client.connect();

// const redisController = module.exports ={
//     GET_ASYNC : promisify(client.get).bind(client),
//     SET_ASYNC : promisify(client.set).bind(client),
// }

module.exports = client;
