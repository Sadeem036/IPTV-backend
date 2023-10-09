import Joi from "joi";

const streamValidation = {

    add: {
        body: Joi.object().keys({
            episode_id: Joi.string().required(),
            user_id: Joi.string().required(),
            time: Joi.string().required(),
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
            episode_id: Joi.string(),
            user_id: Joi.string(),
            time: Joi.string(),
        })
    }
}

export default streamValidation