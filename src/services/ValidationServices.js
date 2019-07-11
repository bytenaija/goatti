import isEmail from 'is-email'
export const validateEmail = (email) => {
  return isEmail(email);
};

export const validatePhoneNumber = (value) => {
  return (/^\d{7,}$/).test(value.replace(/[\s()+\-\.]|ext/gi, ''));
}