/* eslint-disable class-methods-use-this */
import engineerService from '../services/engineerService';
import Response from '../helpers/response';

class EngineerService {
  async createOrRemove(req, res, next) {
    try {
      const { engineers } = req.body;
      // lf id from token verification
      const { id } = req.user;
      const result = engineerService.addEngineers(engineers, { lf: id });
      return Response.customResponse(res, 200, 'operation performed successfully', result);
    } catch (error) {
      return next(error);
    }
  }
}

export default new EngineerService();
