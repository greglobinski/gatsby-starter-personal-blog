import Joi from "joi-browser";

export const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const nameSchema = Joi.object().keys({
  name: Joi.string()
    .alphanum()
    .max(30)
    .required()
});

export const emailSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required()
});

export const messageSchema = Joi.object().keys({
  email: Joi.string().required()
});
