const Joi = require("joi");

module.exports.contactSchema = Joi.object({
    name: Joi.string().required(),
    orgName: Joi.string().required(),
    email: Joi.string().required(),
    phone_no: Joi.number().required().max(10),
    address: Joi.string().required(),
}).required();