/* eslint-disable import/no-unresolved */
import Response from '../helpers/response';
import Schema from './schema/index';
import Joi from '@hapi/joi';

class RatingValidator {

    static async validateCreate(req, res, next) {
        
        const schema = Joi.object().keys({
            user: Schema.id,
            quality: Schema.rating
            .error((errors) => new Error(`quality is required and must be object and ${errors}`)),
            quantity: Schema.rating
            .error((errors) =>new Error(`quantity is required and must be object and ${errors}`)),
            initiative: Schema.rating
            .error((errors) => new Error(`initiative is required and must be object and ${errors}`)),
            communication: Schema.rating
            .error((errors) => new  Error(`communication is required and must be object and ${errors}`)),
            professionalism: Schema.rating
            .error((errors) => new  Error(`professionalism is required and must be object and ${errors}`)),
            integration: Schema.rating
            .error((errors) => new Error(`integration is required and must be object and ${errors}`)),
        });

        const { error } = schema.validate(req.body);
        if (error) return Response.validationError(res, `${error}`);
        next();
    }
}

export default RatingValidator;
