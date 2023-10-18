import Joi from "joi";

const genreValidation = {

    add: {
        body: Joi.object().keys({
            name: Joi.string().required().min(2).max(20)
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
            name: Joi.string().min(2).max(20)
        })
    }
}

export default genreValidation