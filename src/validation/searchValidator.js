/* eslint-disable import/no-unresolved */
import Response from '../helpers/response';

class SearchValidator {
  static async checkRequestParams(req, res, next) {
    const allowed = [
      'key_word',
    ];
    const fields = req.query;
    const fieldKeys = Object.keys(fields);

    const result = fieldKeys.some((el) => allowed.indexOf(el) === -1);

    if (result) {
      return Response.validationError(res, 'Invalid query paramaters passed', 'Validation Error');
    }
    next();
 
  }
}

export default SearchValidator;
