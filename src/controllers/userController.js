/* eslint-disable no-restricted-globals */
import UserService from '../services/userService';
import Response from '../helpers/response';

const { getAllEngineers, getSingleEngineer } = UserService;

class UserController {
  static async viewAllProfiles(req, res) {
    const allUsers = await getAllEngineers();

    Response.customResponse(res, 200, 'success', allUsers);
  }

  static async viewSingleProfile(req, res) {
    const { id } = req.params;
    if (isNaN(id)) Response.badRequestError(res, 'enter a valid user id');

    const user = await getSingleEngineer({ id });

    if (!user) Response.notFoundError(res, 'User not found');

    Response.customResponse(res, 200, 'User found successfully', user);
  }
}

export default UserController;
