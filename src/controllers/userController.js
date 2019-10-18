import UserService from '../services/userService';
import Response from '../helpers/response';

const { getAllEngineers } = UserService;

class UserController {
  static async viewAllProfiles(req, res) {
    const allUsers = await getAllEngineers();

    Response.customResponse(res, 200, 'success', allUsers);
  }
}

export default UserController;
