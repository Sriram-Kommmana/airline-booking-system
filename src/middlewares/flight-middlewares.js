const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if(!req.body.flightNumber)
    {   
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['flight number not found in the oncoming request'], StatusCodes.BAD_REQUEST);
        
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.airplaneId)
    {   
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['airplane ID not found in the oncoming request'], StatusCodes.BAD_REQUEST);
        
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.departureAirportId)
    {   
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['departure airport ID not found in the oncoming request'], StatusCodes.BAD_REQUEST);
        
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.arrivalAirportId)
    {   
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['arrival airport ID not found in the oncoming request'], StatusCodes.BAD_REQUEST);
        
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.departureTime)
    {   
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['departure time not found in the oncoming request'], StatusCodes.BAD_REQUEST);
        
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.arrivalTime)
    {   
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['arrival time not found in the oncoming request'], StatusCodes.BAD_REQUEST);
        
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.price)
    {   
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['price not found in the oncoming request'], StatusCodes.BAD_REQUEST);
        
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    if(!req.body.totalSeats)
    {   
        ErrorResponse.message = 'Something went wrong while creating flight';
        
        ErrorResponse.error = new AppError(['total seats not found in the oncoming request'], StatusCodes.BAD_REQUEST);
        
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateCreateRequest
}