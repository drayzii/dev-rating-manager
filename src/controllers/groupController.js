/* eslint-disable class-methods-use-this */
import engineerService from '../services/engineerService';
import userService from '../services/userService';
import Response from '../helpers/response';

class EngineerService {
  async isRegistered(engineerId) {
    const user = await userService.findUser({ id: engineerId });
    if (user) return true;
    return false;
  }

  async createOrRemove(req, res, next) {
    try {
      const { engineers } = req.body;

      // check if all engineers are registered
      const allEngineersStatus = await engineers.map((engineer) => this.isRegistered(engineer));
      const unregistered = allEngineersStatus.some((any) => any === false);
      if (unregistered) return Response.notFoundError(res, 'some engineer(s) are not found');
      // lf id from token verification
      const { id } = req.user;
      const result = await engineerService.addEngineers(engineers, { lf: id });
      return Response.customResponse(res, 200, 'operation performed successfully', result);
    } catch (error) {
      return next(error);
    }
  }
}

export default new EngineerService();
