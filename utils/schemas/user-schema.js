const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().required().max(8),
  job: Joi.string().required().max(6),
  id: Joi.string().required().max(8),
  createdAt: Joi.string().required().max(24)
})

module.exports = {
  userSchema
}