/* eslint-disable no-useless-catch */
import Sequelize from 'sequelize';
import database from '../database/models';

const { User } = database;
const { Op } = Sequelize;

/** Class representing user services. */

class UserService {
  /**
   * Creates a new message.
   * @param {object} param details of a message.
   * @returns {object} users new message.
   */
  static async findUser(param) {
    try {
      const users = await User.findAll({
        where: param,
      });
      return users;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @returns {*} users
   */
  static async getAllEngineers() {
    const users = await database.User.findAll({
      attributes: {
        exclude: ['password'],
      },
      where: { [Op.not]: [{ role: 'Super LF' }] },
    });

    return users;
  }
}

export default UserService;
