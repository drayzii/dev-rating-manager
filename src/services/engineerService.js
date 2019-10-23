/* eslint-disable no-useless-catch */
import database from '../database/models';

const { Group } = database;

class EngineerService {
  static createOrUpdateGroup(lf, engineers) {
    return Group.findOne({
      where: { lf },
    }).then((user) => {
      if (!user) {
        return Group.create({ lf, engineers });
      }
      return Group.update({ engineers }, { returning: true, where: { lf } });
    }).catch((error) => { throw error; });
  }
}
export default EngineerService;
