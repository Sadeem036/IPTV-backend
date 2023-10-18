import Joi from "joi";

const userValidation = {

    register: {
        body: Joi.object().keys({
            first_name: Joi.string().required().min(2).max(20),
            last_name: Joi.string().required().min(2).max(20),
            email: Joi.string().required().email(),
            password: Joi.string().required().min(6).max(12)
        })
    },

    login: {
        body: Joi.object().keys({
            email: Joi.string().required().email(),
            password: Joi.string().required().min(6).max(12)
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
            first_name: Joi.string().min(2).max(20),
            last_name: Joi.string().min(2).max(20),
            email: Joi.string().email(),
            password: Joi.string().min(6).max(12)
        })
    }
}

export default userValidation