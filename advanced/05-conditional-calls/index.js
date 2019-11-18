
export default (callback, savedAmf, amf, amf2, preferencesConsent2) => {
  const preferencesSubmitErrorShow = () => {
    callback('show');
  };
  const preferencesSubmitErrorHide = () => {
    callback('hide');
  };

  if (
    !savedAmf
      && (!amf || (preferencesConsent2 && !amf2))
  ) {
    preferencesSubmitErrorShow();
    return;
  }

  preferencesSubmitErrorHide();
};
