export default class MyError {
  static codes = {
    NO_NETWORK: 1,
    SAVE_ERROR: 2,
    NO_PERMISSION: 3
  }

  constructor(config) {
    Object.assign(this, config);
  }

  static fromAjax(response, doThrow) {
    let error;
    let hasErrors = true; // uncomment to spoof a 404

    if (hasErrors || response.status === 404) {
      error = new MyError({
        code: MyError.codes.NO_NETWORK,
        text: response.statusText
      });
    }

    if (doThrow) {
      throw error;
    }

    return error;
  }
}