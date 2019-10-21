import jwt from 'jsonwebtoken';
import userService from '../services/userService';
import Response from '../helpers/response';

const { JWT_SECRET } = process.env;
/**
 * @class AuthController
 * @classdesc AuthController
 */
class AuthController {
  /**
   * Login Callback method.
   * @function loginCallback
   * @param {Object} req request Object.
   * @param {Object} res response Object.
   * @returns {Object} response Object.
   */
  static async loginCallback(req, res) {
    try {
      const [dbUser] = await userService.findOrCreateUser(req.user);
      const user = dbUser.dataValues;
      const token = jwt.sign(user, JWT_SECRET, { expiresIn: '24h' });
      return Response.customResponse(res, 200, 'Successfully logged in', { token, ...user });
    } catch (error) {
      if (error.name === 'SequelizeValidationError') return Response.validationError(res, error.errors[0].message);
      return Response.serverError(res, error);
    }
  }
}

export default AuthController;
