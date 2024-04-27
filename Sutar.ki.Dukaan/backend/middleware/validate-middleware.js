// middleware.js
const { SignupSchema } = require("../validators/auth-validate");

const validateMiddleware = async (req, res, next) => {
    try {
        const parsedBody = await SignupSchema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

module.exports = validateMiddleware;
