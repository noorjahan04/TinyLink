import validator from "validator";

export const validateURL = (url) => {
  return validator.isURL(url, {
    require_protocol: true
  });
};
