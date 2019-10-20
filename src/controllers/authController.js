import jwt from 'jsonwebtoken';
import models from '../database/models';

const { JWT_SECRET } = process.env;
/**
 * @class AuthController
 * @classdesc AuthController
 */
class AuthController {
  /**
   * Login Callback method.
   * @function loginCallback
   * @param {Object} req request Object.
   * @param {Object} res response Object.
   * @returns {Object} response Object.
   */
  static async loginCallback(req, res) {
    const [dbUser] = await models.User.findOrCreate({
      where: { googleId: req.user.googleId }, defaults: req.user,
    });
    const user = dbUser.dataValues;
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '24h' });
    res.status(200).json({ status: res.statusCode, token, user });
  }
}

export default AuthController;
