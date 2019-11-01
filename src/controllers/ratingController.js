import Response from '../helpers/response';
import RatingService from '../services/ratingService';
import UserServices from '../services/userService';

import { computeAverage } from "../helpers/index";
class RatingController {

    async createRatings(req, res, next) {
        try {
            //Creates Ratings
            let createdRating = await RatingService.createRating(req.body);
            const { user } = createdRating;

            //Re-compute average rating
            RatingService.computeAverage(user);

            return Response.customResponse(res, 201, 'Rating created', createdRating);

        } catch (error) {
            return next(error);
        }
    }

    async getAllRatings(req, res, next) {
        try {
            //Get All ratings from average_rating table
            const ratings = await RatingService.getRatings();
            
            return Response.customResponse(res, 200, 'Ratings retrieved successfully', ratings)
        } catch (error) {
            return next(error);
        }
    }

    async getAllEngineerRatings(req, res, next) {
        try {
            //Get All ratings from average_rating table
            const ratings = await RatingService.getAverage({});

            return Response.customResponse(res, 200, 'Ratings retrieved successfully', ratings)
        } catch (error) {
            return next(error);
        }
    }

    async getEngineerRating(req, res, next) {
        try {
            const id = req.params.id

            //Check if Correct User Id Passed 
            let user = await UserServices.findOneUser({id});

            if(!user || user.role !== 'Engineer') return Response.notFoundError(res, 'Invalid engineer Id passed')
            //Get All ratings 
            let ratings = await RatingService.getRatings({ user: id });

            //Get Average rating from average_rating Table
            let average = await RatingService.getAverage({ user: id });

            return Response.customResponse(res, 200, 'Ratings retrieved successfully', { average, ratings });

        } catch (error) {
            return next(error);
        }

    }

    async updateRating(req, res, next) {
        try {
            //Get Rating by Id 
            const rating = await RatingService.getRatings({ id: req.params.id });

            if (rating.length === 0) return Response.notFoundError(res, 'Invalid rating Id used');

            let updatedRating = await RatingService.updateRating({id: req.params.id}, req.body);

            const { user } = rating[0].dataValues;

            //Re-compute average rating
            RatingService.computeAverage(user);

            return Response.customResponse(res, 200, 'Rating updated', updatedRating);
        } catch (error) {
            return next(error);
        }

    }
}


export default new RatingController();