/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import Joi from '@hapi/joi';

export default {
<<<<<<< HEAD
    rating: Joi.object({
        rate: Joi.number().integer().min(-2).max(2).required(),
        feedback: Joi.string().trim().required()
    }).required(),
    id: Joi.number()
    .integer()
    .min(0)
    .required(),
=======
  id: Joi.number()
    .integer()
    .min(1)
    .required()
    .error((errors) => new Error('value must be an integers')),
>>>>>>> refix controller
};
