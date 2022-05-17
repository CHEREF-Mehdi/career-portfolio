import Joi, { Context, ErrorReport, ValidationErrorItem } from 'joi';

export interface IContactFormData {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface IErrorReport extends ErrorReport {
  type: string;
  context: Context;
}

const errorValidation = (errors: ErrorReport[]): ValidationErrorItem => {
  const error: IErrorReport = errors[0] as IErrorReport;
  let message: string = '';

  switch (error.type) {
    case 'string.base':
      message = `The ${error.context.key} should be of type "text"`;
      break;
    case 'any.empty':
      message = `Please fill a valide ${error.context.key} field`;
      break;
    case 'any.required':
      message = `Please fill a valide ${error.context.key} field`;
      break;
    case 'string.min':
      message = `Should have at least ${error.context.limit} characters!`;
      break;
    case 'string.max':
      message = `Should have at most ${error.context.limit} characters!`;
      break;
    case 'string.email':
      message = `Please fill a valid email address`;
      break;
    default:
      break;
  }
  return {
    message: message,
    path: error.path,
    type: error.type,
    context: error.context,
  };
};

const requiredAndNotEmptyStr = Joi.string().required().trim().empty();

export const contactFormSchema = Joi.object<IContactFormData>().keys({
  name: requiredAndNotEmptyStr.min(3).max(30).error(errorValidation),
  email: requiredAndNotEmptyStr.email().error(errorValidation),
  subject: requiredAndNotEmptyStr.min(5).max(50).error(errorValidation),
  message: requiredAndNotEmptyStr.min(30).error(errorValidation),
});

// 'any.custom': [Object],
// 'any.default': [Object],
// 'any.failover': [Object],
// 'any.invalid': [Object],
// 'any.only': [Object],
// 'any.ref': [Object],
// 'any.required': [Object],
// 'any.unknown': [Object],
// 'string.alphanum': [Object],
// 'string.base': [Object],
// 'string.base64': [Object],
// 'string.creditCard': [Object],
// 'string.dataUri': [Object],
// 'string.domain': [Object],
// 'string.email': [Object],
// 'string.empty': [Object],
// 'string.guid': [Object],
// 'string.hex': [Object],
// 'string.hexAlign': [Object],
// 'string.hostname': [Object],
// 'string.ip': [Object],
// 'string.ipVersion': [Object],
// 'string.isoDate': [Object],
// 'string.isoDuration': [Object],
// 'string.length': [Object],
// 'string.lowercase': [Object],
// 'string.max': [Object],
// 'string.min': [Object],
// 'string.normalize': [Object],
// 'string.token': [Object],
// 'string.pattern.base': [Object],
// 'string.pattern.name': [Object],
// 'string.pattern.invert.base': [Object],
// 'string.pattern.invert.name': [Object],
// 'string.trim': [Object],
// 'string.uri': [Object],
// 'string.uriCustomScheme': [Object],
// 'string.uriRelativeOnly': [Object],
// 'string.uppercase': [Object]
