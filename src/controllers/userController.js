/* eslint-disable no-restricted-globals */
import Sequelize from 'sequelize';
import Response from '../helpers/response';
import UserService from '../services/userService';

const { Op } = Sequelize;

const { findUser, getEngineersIds, getSingleEngineer } = UserService;

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

  static async viewAllProfiles(req, res) {
    let engineerIds;
    if (req.user.role !== 'LF') return Response.authorizationError(res, 'You do not have access to perform this action');

    const results = await getEngineersIds(req.user.id);

    // if there is engineers
    if (results[0].dataValues.engineers.length > 0) {
      engineerIds = results[0].dataValues.engineers;
      const allUsers = await findUser({ id: { [Op.or]: engineerIds }, role: 'Engineer' });
      return Response.customResponse(res, 200, 'success', allUsers);
    }

    return Response.badRequestError(res, 'No engineers found');
  }

  static async getAllUsers(req, res, next) {
    try {
      if (req.user.role === 'Engineer') return Response.authorizationError(res, 'You do not have access to perform this action');
      // if there is engineers
      const results = await UserService.findUser({});
      return Response.customResponse(res, 200, 'success', results);
    } catch (error) {
      return next(error);
    }
  }

  static async viewSingleProfile(req, res) {
    const { id } = req.params;
    if (isNaN(parseInt(id, 10))) Response.badRequestError(res, 'enter a valid user id');

    if (req.user.role === 'Engineer' && parseInt(id, 10) !== req.user.id) {
      return Response.authorizationError(res, 'Don\'t  have previelage to access this end point');
    }

    const user = await getSingleEngineer({ id });

    if (!user) Response.notFoundError(res, 'User not found');

    return Response.customResponse(res, 200, 'User found successfully', user);
  }

  static async getMyProfile(req, res) {
    const user = await getSingleEngineer({ id: req.user.id });
    if (!user) Response.notFoundError(res, 'User not found');
    return Response.customResponse(res, 200, 'Profile retrieved successfully', user);
  }
}

export default UserController;
