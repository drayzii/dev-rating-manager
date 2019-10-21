/* eslint-disable no-useless-catch */
import database from '../database/models';

const { User } = database;
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
   * Creates a new message.
   * @param {object} param details of a message.
   * @returns {object} users new message.
   */
  static async findOneUser(param) {
    try {
      const users = await User.findOne({
        where: param,
      });
      return users;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Creates returns a user.
   * @param {object} param details of a message.
   * @returns {object} users new message.
   */
  static async find(param) {
    try {
      const users = await User.findOne({
        where: param,
      });
      return users;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Creates a new message.
   * @param {object} param details of a message.
   * @returns {object} users new message.
   */
  static async findOrCreateUser(user) {
    try {
      const users = await User.findOrCreate({
        where: { googleId: user.googleId }, defaults: user,
      });
      return users;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Creates a new message.
   * @param {object} param details of a message.
   * @returns {object} users new message.
   */
  static async updateUser(user, param) {
    try {
      const users = await User.update(user, {
        where: param,
        returning: true,
      });
      return users;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
