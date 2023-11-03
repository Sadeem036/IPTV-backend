import Joi from "joi";

const seriesValidation = {

    add: {
        body: Joi.object().keys({
            name: Joi.string().required().min(2).max(50),
            description: Joi.string().required(),
            trailer_id: Joi.string().required(),
            thumbnail_id: Joi.string().required(),
        })
    },
    
    id: {
        param: Joi.object().keys({
            id: Joi.string().required()
        })
    },

    update: {
        param: Joi.object().keys({
            id: Joi.string().required()
        }),
        body: Joi.object().keys({
            name: Joi.string().min(2).max(50),
            description: Joi.string(),
            trailer_id: Joi.string(),
            thumbnail_id: Joi.string(),
        })
    }
}

export default seriesValidation