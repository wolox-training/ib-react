export default {
  getValidityClassName: meta => {
    const { asyncValidating, active, touched, valid } = meta;

    if (asyncValidating) {
      return 'async-validating';
    }
    if (active) {
      return;
    }
    if (touched) {
      return valid ? 'valid' : 'invalid';
    }
  }
};
