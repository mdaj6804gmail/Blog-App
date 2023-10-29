const joi = require("joi");

const schema = joi.object().keys({
  //   author: joi.string(),
  title: joi.string().max(300).required(),
  description: joi.string().max(2000).required(),
  // photo: joi.string(),
});

/**
 * object peramites
 * ```js
 * const data = {
    // author: data.author,
    title: data.title,
    description: data.description,
    // photo: data.photo,
  };
  ```
*/
const is_schema_valid = (data) => {
  const schema_data = {
    // author: data.author,
    title: data.title,
    description: data.description,
    // photo: data.photo,
  };
  const isvalid = schema.validate(schema_data);
  return isvalid;
};

module.exports = is_schema_valid;
