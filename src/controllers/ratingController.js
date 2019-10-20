import Response from '../helpers/response';
import RatingService from '../services/ratingService';

class RatingController {

    async createRatings(req,res,next) {
        try {
            
            return Response.customResponse(res,201,'Rating created',req.body);

        } catch (error) {
            return next(error);
        }
    }

    async getAllRatings(req,res,next) {
        try {
            //Get All ratings from average_rating table
        } catch (error) {
            return next(error);
        }

    }

    async getEngineerRating(req,res,next) {
        try {
            //Get Average rating from average_rating Table

            //Get All user ratings from ratings table

        } catch (error) {
            return next(error);
        }

    }

    async updateRating(req,res,next) {
        try {
            //Get Rating by Id 

            //Update Rating
        } catch (error) {
            return next(error);
        }

    }
}


export default new RatingController();