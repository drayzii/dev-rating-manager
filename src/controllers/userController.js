import Response from '../helpers/response';
import UserService from '../services/userService';
/**
 * @class AuthController
 * @classdesc AuthController
 */
class UserController {
  /**
   * Login Callback method.
   * @function loginCallback
   * @param {Object} req request Object.
   * @param {Object} res response Object.
   * @returns {Object} response Object.
   */
  static async updateRole(req, res) {
    try {
      if (req.user.role !== 'Super LF') return Response.authorizationError(res, 'You do not have access to perform this action');
      const { email } = req.body;
      const check = await UserService.findOneUser({ email });
      if (!check) return Response.notFoundError(res, 'User not found');
      if (check.role === 'LF') return Response.badRequestError(res, 'The user is already an LF');
      const user = await UserService.updateUser({ role: 'LF' }, { email });
      return Response.customResponse(res, 200, 'Successfully updated the user to LF', user[1][0]);
    } catch (error) {
      if (error.name === 'SequelizeValidationError') return Response.validationError(res, error.errors[0].message);
      return Response.serverError(res, error);
    }
  }
}

export default UserController;
