/* eslint-disable class-methods-use-this */
import engineerService from '../services/engineerService';
import userService from '../services/userService';
import Response from '../helpers/response';

class EngineerService {
  async createOrRemove(req, res, next) {
    try {
      const { engineers } = req.body;
      const { id } = req.user;
      await Promise.all(
        engineers.map(async (engineerId) => {
          const engineer = await userService.find({ id: engineerId });
          if (!engineer) {
            return Response.notFoundError(res, `engineer ${engineerId} is not found`);
          }
        }),
      );
      const result = await engineerService.addEngineers(engineers, { lf: id });
      return Response.customResponse(res, 200, 'operation performed successfully', result);
    } catch (error) {
      return next(error);
    }
  }
}

export default new EngineerService();
