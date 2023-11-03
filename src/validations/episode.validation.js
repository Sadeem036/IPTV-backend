import Joi from "joi";

const episodeValidation = {

    add: {
        body: Joi.object().keys({
            season_id: Joi.string().required(),
            name: Joi.string().required().min(2).max(50),
            description: Joi.string().required(),
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
            season_id: Joi.string(),
            name: Joi.string().min(2).max(50),
            description: Joi.string(),
            thumbnail_id: Joi.string(),
        })
    }
}

export default episodeValidation