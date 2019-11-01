import Response from '../helpers/response';

export const ratingAccess = (req,res,next)=>{
    if(req.user.role === 'Engineer'){
        return Response.authorizationError(res, 'Only LF\'s can manage ratings');
    }

    next();
}