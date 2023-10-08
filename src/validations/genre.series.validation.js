import Joi from "joi";

const genreSeriesValidation = {

    add: {
        body: Joi.object().keys({
            genre_id: Joi.string().required(),
            series_id: Joi.string().required(),
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
            genre_id: Joi.string().required(),
            series_id: Joi.string().required(),
        })
    }
}

export default genreSeriesValidation