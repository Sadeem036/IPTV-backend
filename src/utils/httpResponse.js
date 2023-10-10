import { ErrorCodesMeta } from "../constants/error-codes.js";
import { SuccessCodesMeta } from "../constants/success-codes.js";
export const httpResponse = {
	SUCCESS: (res, data = {}, message = SuccessCodesMeta.SUCCESS.message) => {
		res.status(200).json({
			status: 200,
			response: "OK",
			message,
			data,
		});
	},
	CREATED: (res, data = {}, message = SuccessCodesMeta.CREATED.message) => {
		res.status(201).json({
			status: 201,
			response: "Created",
			message,
			data,
		});
	},
	ACCEPTED: (res, data = {}, message = SuccessCodesMeta.ACCEPTED.message) => {
		res.status(202).json({
			status: 202,
			response: "Accepted",
			message,
			data,
		});
	},
	NON_AUTHORITATIVE: (
		res,
		data = {},
		message = SuccessCodesMeta.NON_AUTHORITATIVE.message
	) => {
		res.status(203).json({
			status: 203,
			response: "Non-Authoritative Information",
			message,
			data,
		});
	},
	NO_CONTENT: (
		res,
		data = {},
		message = SuccessCodesMeta.NO_CONTENT.message
	) => {
		res.status(204).json({
			status: 204,
			response: "No Content",
			message,
			data,
		});
	},
	NOT_MODIFIED: (
		res,
		data = {},
		message = SuccessCodesMeta.NOT_MODIFIED.message
	) => {
		res.status(304).json({
			status: 304,
			response: "Not Modified.",
			message,
			data,
		});
	},
	BAD_REQUEST: (
		res,
		data = {},
		message = ErrorCodesMeta.BAD_REQUEST.message
	) => {
		res.status(400).json({
			status: 400,
			response: "Bad Request",
			message,
			data,
		});
	},
	UNAUTHORIZED: (
		res,
		data = {},
		message = ErrorCodesMeta.UNAUTHORIZED.message
	) => {
		res.status(401).json({
			status: 401,
			response: "Unauthorized",
			message,
			data,
		});
	},
	FORBIDDEN: (res, data = {}, message = ErrorCodesMeta.FORBIDDEN.message) => {
		res.status(403).json({
			status: 403,
			response: "Forbidden",
			message,
			data,
		});
	},
	NOT_FOUND: (res, data = {}, message = ErrorCodesMeta.NOT_FOUND.message) => {
		res.status(404).json({
			status: 404,
			response: "Not Found",
			message,
			data,
		});
	},
	USER_NOT_FOUND: (res, data = {}, message = ErrorCodesMeta.USER_NOT_EXISTS_WITH_THIS_EMAIL.message) => {
		res.status(404).json({
			status: 404,
			response: "Not Found",
			message,
			data,
		});
	},
	EMAIL_ALREADY_EXISTS: (res, data = {}, message = ErrorCodesMeta.USER_ALREADY_EXISTS.message) => {
		res.status(404).json({
			status: 404,
			response: "email already exists",
			message,
			data,
		});
	},
	PASSWORD_MISMATCH: (res, data = {}, message = ErrorCodesMeta.YOUR_PASSWORD_IS_INCORRECT.message) => {
		res.status(404).json({
			status: 404,
			response: "Not Found",
			message,
			data,
		});
	},
	NOT_ALLOWED: (
		res,
		data = {},
		message = ErrorCodesMeta.NOT_ALLOWED.message
	) => {
		res.status(405).json({
			status: 405,
			response: "Method not allowed.",
			message,
			data,
		});
	},
	INTERNAL_SERVER_ERROR: (
		res,
		data = {},
		message = ErrorCodesMeta.INTERNAL_SERVER_ERROR.message
	) => {
		res.status(500).json({
			status: 500,
			response: "Internal Server Error",
			message,
			data,
		});
	},
};
