import rateLimit from 'express-rate-limit'


export const userLoginRateLimiter =  rateLimit({
        windowMs: 60 * 60 * 1000,
        max: 5,
        message:
            'Too many login attempts. please try again after an hour!',
        standardHeaders: true, 
        legacyHeaders: false,
})
export const adminLoginRateLimiter = rateLimit({
        windowMs: 60 * 60 * 1000,
        max: 5,
        message:
            'Too many login attempts. please try again after an hour!',
        standardHeaders: true, 
        legacyHeaders: false,
})
