import { userService } from "../services/index.js";
import { httpResponse } from "../utils/httpResponse.js";
import passwordHash from 'password-hash';
import jwt from 'jsonwebtoken';
import { } from "dotenv/config";
import config from "../config/index.js";

const userController = {

    add: async (req, res) => {
        try {
            const { password } = req.body
            const hashedPassword = passwordHash.generate(password)
            req.body.password = hashedPassword
            const data = await userService.add(req.body)
            return httpResponse.CREATED(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    get: async (req, res) => {
        try {
            const { pageNumber , limit } = req.query
            const data = await userService.get( pageNumber, limit)
            return httpResponse.SUCCESS(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    login: async (req, res) => {
        try {
            const data = await userService.login(req.body)
            if (!data) {
                return httpResponse.USER_NOT_FOUND(res)
            }
            const verify = passwordHash.verify(req.body.password, data.password)
            if (verify) {
                const payload = {
                    _id: data._id,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    password: req.body.password
                }
                const token = jwt.sign(payload, config.env.jwtSecret)
                return httpResponse.SUCCESS(res, { token, data })
            }
            return httpResponse.PASSWORD_MISMATCH(res)
        }
        catch (error) {
            console.log(error.message);
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    getOne: async (req, res) => {
        try {
            const data = await userService.getByID(req.params.id)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message)
        }
    },

    updateOne: async (req, res) => {
        try {
            const data = await userService.getByIdAndUpdate(req.params.id, req.body)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    deleteOne: async (req, res) => {
        try {
            const data = await userService.deleteOne(req.params.id)
            return httpResponse.SUCCESS(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    delete: async (req, res) => {
        try {
            const data = await userService.delete()
            return httpResponse.SUCCESS(res, data)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    getUserStreams: async (req, res) => {
        try {
            const data = await userService.getUserStreams(req.params.id)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    getStreamByUserIdAndStreamID: async (req, res) => {
        try {
            const { id, stream_id } = req.params
            const data = await userService.getStreamByUserIdAndStreamId(id, stream_id)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    },

    deleteStreamByUserIdAndStreamId: async (req, res) => {
        try {
            const { id, stream_id } = req.params
            const data = await userService.deleteStreamByUserIdAndStreamId(id, stream_id)
            if (data) {
                return httpResponse.SUCCESS(res, data)
            }
            return httpResponse.NOT_FOUND(res)
        }
        catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res,  error.message)
        }
    }


}

export default userController