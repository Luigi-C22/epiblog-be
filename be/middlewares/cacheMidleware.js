const cache = new Map();

const cacheMiddleware = (req, res, next) => {
    const { url } = req;

    const cacheResponse = cache.get(url);

    if (cacheResponse) {
        return res.send(JSON.parse(cacheResponse));
    }
    res.sendResponse = res.send;
    res.send = (body) => {
        cache.set(url, body);
        res.sendResponse(body);
    };

    next();
};

module.exports = cacheMiddleware;
