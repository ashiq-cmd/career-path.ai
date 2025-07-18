module.exports = function (req, res, next) {
  // Use a header value if available, fallback to IP
  const userId = req.headers['x-user-id'] || req.ip || 'guest';
  req.user = { id: userId };
  next();
};
