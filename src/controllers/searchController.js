import Response from '../helpers/response';
import Sequelize from 'sequelize';
import userService from '../services/userService';

const { Op } = Sequelize;

class SearchController {
    async searchUser(req, res, next) {
        try {
            const { key_word } = req.query;
            let where;
            let searchResults;

            if(key_word !== undefined){
                where = {
                    [Op.or]: [
                        { email: { [Op.iLike]: `%${key_word}%` } },
                        { firstName: { [Op.iLike]: `%${key_word}%` } },
                        { lastName: { [Op.iLike]: `%${key_word}%` } },
                    ]
                };
            }else {
                where = {}
            }
           
            searchResults = await userService.findUser(where);

            if (searchResults.length < 1)return Response.customResponse(res, 200, 'User not found ', searchResults);

            return Response.customResponse(res,200, 'User Found', searchResults);

        } catch (error) {
            return next(error);
        }
    }
}

export default new SearchController();