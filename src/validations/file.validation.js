import Joi from "joi";

const fileValidation = {

    add: {
        body: Joi.object().keys({
            original_name: Joi.string().required().min(2).max(20),
            current_name: Joi.string().required().min(2).max(20),
            type: Joi.string().required(),
            path: Joi.string().required(),
            size: Joi.string().required()
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
            original_name: Joi.string().required().min(2).max(20),
            current_name: Joi.string().required().min(2).max(20),
            type: Joi.string().required(),
            path: Joi.string().required(),
            size: Joi.string().required()
        })
    }
}

export default fileValidation