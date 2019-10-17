/* eslint-disable no-useless-catch */
import database from '../database/models';

const { Group } = database;

class EngineerService {
  static async addEngineers(list, params) {
    try {
      return await Group.update(list, {
        returning: true,
        where: params,
      });
    } catch (error) {
      throw error;
    }
  }
}
export default new EngineerService();
