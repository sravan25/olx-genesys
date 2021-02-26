import {
    AUTH_SUCCESS,
    AUTH_FAILED,
    AUTH_VERIFY,
    SYSTEM_IPTOKEN,
  } from "../actions";
  import cloneDeep from "lodash/cloneDeep";
  
  const initialState = {
    auth: {
      success: false,
      failed: true,
      verified: false,
      email: "",
      userName: "",
      firstName: "",
      lastName: "",
      mobile: "",
      token: "",
    },
    system: {
      ipaddress: "",
      token: "",
    },
  };
  
  export default function auth(state = initialState, action) {
    let newState;
    switch (action.type) {
      case AUTH_SUCCESS:
        newState = cloneDeep(state);
        newState.auth.success = action.params.success;
        newState.auth.token = action.params.token;
        newState.auth.firstName = action.params.firstName;
        newState.auth.lastName = action.params.lastName;
        newState.auth.mobile = action.params.mobile;
        newState.auth.email = action.params.email;
        return newState;
      case AUTH_FAILED:
        newState = cloneDeep(state);
        newState.auth.failed = action.params.failed;
        return newState;
      case AUTH_VERIFY:
        newState = cloneDeep(state);
        newState.auth.verified = action.params.verified;
        newState.auth.firstName = action.params.firstName;
        newState.auth.lastName = action.params.lastName;
        return newState;
      case SYSTEM_IPTOKEN:
        newState = cloneDeep(state);
        newState.system.token = action.params.token;
        newState.system.ipaddress = action.params.ipaddress;
        return newState;
      default:
        return state;
    }
  }
  