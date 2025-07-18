const rateLimit = require('express-rate-limit');

const userRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 20,                  // max 20 requests per hour per user
  keyGenerator: (req) => req.user?.id || req.ip,
  message: {
    success: false,
    message: '🛑 Rate limit exceeded. Please wait before making more requests.',
  },
});

module.exports = userRateLimiter;
