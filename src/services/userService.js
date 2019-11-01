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

  /**
   * @returns {*} users
   */
  static async getEngineersIds(lfId) {
    const engineers = await database.Group.findAll({
      where: { lf: lfId },
    });

    return engineers;
  }

  /**
   * Get user by id
   * @param {string}  params be checked against
   * @return {object} Oject of request if found
   */
  static async getSingleEngineer(params) {
    try {
      const user = await database.User.findOne({
        attributes: {
          exclude: ['password'],
        },
        where: params,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
