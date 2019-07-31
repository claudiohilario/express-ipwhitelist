const IpRejectedError = class extends Error {
    constructor(message) {
      message = message || 'The requesting IP was rejected';
      super(message);
      this.message = message;
      this.name = 'IpRejectedError';

    }
  }

module.exports = function ipWhiteList(ips = []) {
    return (req, res, next) => {
        try {
            const xForwardedFor = (req.headers['x-forwarded-for'] || '').replace(/:\d+$/, '');
            const currentRequestIp = xForwardedFor || req.connection.remoteAddress;
            if(!ips.includes(currentRequestIp)) {
                throw new IpRejectedError();
            }
            next();
          } catch (err) {
            next(err)
          }
    }
}