const Joi = require("joi");

const loginSchema = Joi.object({
  token: Joi.string().required().max(17)
})

module.exports = {
  loginSchema
}