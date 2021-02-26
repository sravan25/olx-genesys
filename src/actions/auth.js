export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_VERIFY = "AUTH_VERIFY";
export const AUTH_FAILED = "AUTH_FAILED";
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_UP = "SIGN_UP";

export const authSuccess = (
  success,
  email,
  firstName,
  mobile,
  token,
  lastName
) => {
  return {
    type: AUTH_SUCCESS,
    params: { success, email, firstName, mobile, token, lastName },
  };
};

export const authVerify = (email, password) => {
  return {
    type: AUTH_VERIFY,
    params: { email, password },
  };
};

export const authFail = (failed) => {
  return {
    type: AUTH_FAILED,
    params: { failed },
  };
};
